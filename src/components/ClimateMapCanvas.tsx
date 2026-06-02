'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import { GeoJSON, MapContainer, TileLayer, useMap } from 'react-leaflet';

type Position = [number, number];
type PolygonCoordinates = Position[][];
type MultiPolygonCoordinates = Position[][][];

type ClimateZoneGeometry =
  | {
      type: 'Polygon';
      coordinates: PolygonCoordinates;
    }
  | {
      type: 'MultiPolygon';
      coordinates: MultiPolygonCoordinates;
    };

interface ClimateZoneProperties {
  id: string;
  name: string;
  description: string;
  tempRange: string;
  rainfall: string;
  humidity: string;
  season: string;
  bestCrops: string[];
  color: string;
  accent: string;
  temperatureTrend: string;
  rainfallChange: string;
  nativePlantImpact: string;
  cropImpact: string;
  vulnerabilityLevel: 'Low' | 'Moderate' | 'High' | 'Severe';
  nativePlants: string[];
  impactedCrops: string[];
}

interface ClimateZoneFeature {
  type: 'Feature';
  geometry: ClimateZoneGeometry;
  properties: ClimateZoneProperties;
}

interface ClimateZoneCollection {
  type: 'FeatureCollection';
  features: ClimateZoneFeature[];
}

interface LayerWithFeature extends L.Path {
  feature?: ClimateZoneFeature;
}

type LeafletGeoJsonInput = Extract<NonNullable<Parameters<typeof L.geoJSON>[0]>, { type: string }>;

function readZoneCollection(raw: unknown): ClimateZoneCollection | null {
  if (!raw || typeof raw !== 'object') return null;

  const candidate = raw as Partial<ClimateZoneCollection>;
  if (candidate.type !== 'FeatureCollection' || !Array.isArray(candidate.features)) {
    return null;
  }

  return candidate as ClimateZoneCollection;
}

function buildFeatureBounds(feature: ClimateZoneFeature): L.LatLngBounds {
  return L.geoJSON(feature as LeafletGeoJsonInput).getBounds();
}

function MapBoundsController({ data }: { data: ClimateZoneCollection }) {
  const map = useMap();

  useEffect(() => {
    const bounds = L.geoJSON(data as LeafletGeoJsonInput).getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds.pad(0.08), { animate: true, duration: 0.85 });
    }
  }, [data, map]);

  return null;
}

function SelectedZoneController({
  selectedZone,
}: {
  selectedZone: ClimateZoneFeature | undefined;
}) {
  const map = useMap();
  const hasCenteredOnSelectionRef = useRef(false);

  useEffect(() => {
    if (!selectedZone) return;

    if (!hasCenteredOnSelectionRef.current) {
      hasCenteredOnSelectionRef.current = true;
      return;
    }

    const bounds = buildFeatureBounds(selectedZone);
    if (bounds.isValid()) {
      map.flyToBounds(bounds.pad(0.12), {
        animate: true,
        duration: 0.8,
        maxZoom: 6,
      });
    }
  }, [map, selectedZone]);

  return null;
}

function ClimateZoneLayer({
  data,
  hoveredZoneId,
  selectedZoneId,
  onHoverZone,
  onSelectZone,
}: {
  data: ClimateZoneCollection;
  hoveredZoneId: string | null;
  selectedZoneId: string | null;
  onHoverZone: (zoneId: string | null) => void;
  onSelectZone: (zoneId: string) => void;
}) {
  const geoJsonRef = useRef<L.GeoJSON | null>(null);

  useEffect(() => {
    const layer = geoJsonRef.current;
    if (!layer) return;

    layer.eachLayer((geoLayer) => {
      const pathLayer = geoLayer as L.Path & LayerWithFeature;
      const feature = pathLayer.feature;
      if (!feature) return;

      const zoneId = feature.properties.id;
      const isHovered = hoveredZoneId === zoneId;
      const isSelected = selectedZoneId === zoneId;

      pathLayer.setStyle({
        color: isSelected ? '#dcfce7' : isHovered ? '#34d399' : 'rgba(255, 255, 255, 0.35)',
        weight: isSelected ? 3 : isHovered ? 2.25 : 1.25,
        opacity: isSelected ? 1 : 0.85,
        fillColor: feature.properties.color,
        fillOpacity: isSelected ? 0.78 : isHovered ? 0.62 : 0.42,
      });

      if (isHovered || isSelected) {
        pathLayer.bringToFront();
      }
    });
  }, [hoveredZoneId, selectedZoneId, data]);

  return (
    <GeoJSON
      ref={geoJsonRef}
      data={data as LeafletGeoJsonInput}
      style={(feature) => ({
        color: '#ffffff',
        weight: 1.25,
        opacity: 0.85,
        fillColor: feature ? feature.properties.color : '#10b981',
        fillOpacity: 0.42,
      })}
      onEachFeature={(feature, layer) => {
        const zone = feature as ClimateZoneFeature;

        layer.bindTooltip(
          `<div style="min-width: 190px"><div style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #6ee7b7; font-family: inherit; margin-bottom: 6px;">Climate zone</div><div style="font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 6px;">${zone.properties.name}</div><div style="font-size: 12px; color: rgba(255,255,255,0.72); line-height: 1.45; margin-bottom: 4px;">Temperature trend: ${zone.properties.temperatureTrend}</div><div style="font-size: 12px; color: rgba(255,255,255,0.72); line-height: 1.45;">Vulnerability: ${zone.properties.vulnerabilityLevel}</div></div>`,
          {
            direction: 'top',
            sticky: true,
            opacity: 1,
            className: 'climate-map-tooltip',
          }
        );

        layer.on({
          mouseover: () => onHoverZone(zone.properties.id),
          mouseout: () => onHoverZone(null),
          click: () => onSelectZone(zone.properties.id),
        });
      }}
    />
  );
}

export function ClimateMapCanvas() {
  const [data, setData] = useState<ClimateZoneCollection | null>(null);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>('indogangetic-humid-subtropical');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await fetch('/data/india-climate-zones.geojson');
      const raw = (await response.json()) as unknown;
      const collection = readZoneCollection(raw);

      if (!mounted || !collection) return;

      setData(collection);
    };

    void loadData();

    return () => {
      mounted = false;
    };
  }, []);

  const selectedZone = useMemo(() => {
    if (!data || !selectedZoneId) return data?.features[0];
    return data.features.find((feature) => feature.properties.id === selectedZoneId) ?? data.features[0];
  }, [data, selectedZoneId]);

  const zones = data?.features ?? [];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.95fr)] gap-6 items-stretch">
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl min-h-[820px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/8 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-5 left-5 z-[500] flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.75)]" />
          Pan, zoom, hover, and click zones
        </div>

          {isMounted && data ? (
          <MapContainer
            className="h-[820px] md:h-[900px] lg:h-[980px] w-full"
            center={[22.5, 79.5]}
            zoom={4}
            minZoom={4}
            maxZoom={7}
            zoomControl
            scrollWheelZoom
            doubleClickZoom
            dragging
            attributionControl={false}
            aria-label="Interactive climate map of India"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
              noWrap
            />
            <MapBoundsController data={data} />
            <SelectedZoneController selectedZone={selectedZone} />
            <ClimateZoneLayer
              data={data}
              hoveredZoneId={hoveredZoneId}
              selectedZoneId={selectedZoneId}
              onHoverZone={setHoveredZoneId}
              onSelectZone={setSelectedZoneId}
            />
          </MapContainer>
        ) : (
          <div className="h-[820px] md:h-[900px] lg:h-[980px] flex items-center justify-center text-white/50">
            Loading climate atlas...
          </div>
        )}

        <div className="absolute inset-x-5 bottom-5 z-[500] flex flex-wrap gap-2">
          {zones.map((zone) => (
            <button
              key={zone.properties.id}
              type="button"
              onClick={() => setSelectedZoneId(zone.properties.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 ${
                selectedZoneId === zone.properties.id
                  ? 'border-[#10b981]/40 bg-[#10b981]/15 text-white shadow-[0_0_0_1px_rgba(16,185,129,0.15)]'
                  : 'border-white/10 bg-black/55 text-white/65 hover:border-[#10b981]/25 hover:bg-white/[0.06] hover:text-white'
              }`}
              aria-pressed={selectedZoneId === zone.properties.id}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: zone.properties.color }} />
              {zone.properties.name}
            </button>
          ))}
        </div>
      </div>

      <aside className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 px-3 py-1 text-xs font-medium text-[#10b981] mb-4">
            Climate signals
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            {selectedZone?.properties.name ?? 'Select a climate zone'}
          </h3>
          <p className="mt-3 text-white/55 leading-relaxed">
            {selectedZone?.properties.description ?? 'Click or tap a zone on the map to inspect climate change signals, ecosystem stress, and crop vulnerability.'}
          </p>
        </div>

        {selectedZone ? (
          <div className="grid gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/8 bg-black/40 p-4">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">Temperature trends</div>
                <div className="text-sm text-white/80 leading-snug">{selectedZone.properties.temperatureTrend}</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/40 p-4">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">Rainfall changes</div>
                <div className="text-sm text-white/80 leading-snug">{selectedZone.properties.rainfallChange}</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/40 p-4 sm:col-span-2">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">Impact on native plants</div>
                <div className="text-sm text-white/80 leading-snug mb-3">{selectedZone.properties.nativePlantImpact}</div>
                <div className="flex flex-wrap gap-2">
                  {selectedZone.properties.nativePlants.map((plant) => (
                    <span key={plant} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75">
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/40 p-4 sm:col-span-2">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">Impact on agricultural crops</div>
                <div className="text-sm text-white/80 leading-snug mb-3">{selectedZone.properties.cropImpact}</div>
                <div className="flex flex-wrap gap-2">
                  {selectedZone.properties.impactedCrops.map((crop) => (
                    <span key={crop} className="inline-flex items-center rounded-full border border-white/10 bg-[#10b981]/10 px-3 py-1 text-xs text-[#c4fce3]">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/40 p-4 sm:col-span-2 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">Vulnerability level</div>
                  <div className="text-lg font-semibold text-white">{selectedZone.properties.vulnerabilityLevel}</div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase ${
                  selectedZone.properties.vulnerabilityLevel === 'Severe'
                    ? 'bg-red-500/15 text-red-200 border border-red-500/20'
                    : selectedZone.properties.vulnerabilityLevel === 'High'
                      ? 'bg-orange-500/15 text-orange-200 border border-orange-500/20'
                      : 'bg-[#10b981]/15 text-[#a7f3d0] border border-[#10b981]/20'
                }`}>
                  Risk
                </span>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-auto rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent p-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-3">Legend</div>
          <div className="space-y-3">
            {zones.map((zone) => (
              <button
                key={zone.properties.id}
                type="button"
                onClick={() => setSelectedZoneId(zone.properties.id)}
                className={`w-full flex items-center justify-between gap-4 text-sm transition-colors text-left rounded-xl px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60 ${
                  selectedZoneId === zone.properties.id ? 'text-white bg-white/[0.04]' : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                }`}
                aria-pressed={selectedZoneId === zone.properties.id}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: zone.properties.color }} />
                  <span className="truncate">{zone.properties.name}</span>
                </span>
                <span className="text-white/35 text-xs font-mono uppercase tracking-[0.16em]">{zone.properties.vulnerabilityLevel}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}