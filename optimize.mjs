import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizeDirectory = async (dir, format, width) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    console.log(`Found ${files.length} files in ${dir}`);
    for (const file of files) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/i, `.${format}`));
        
        let transform = sharp(inputPath);
        if (width) {
            transform = transform.resize({ width, withoutEnlargement: true });
        }
        
        if (format === 'webp') {
            transform = transform.webp({ quality: 60, effort: 4 });
        }
        
        await transform.toFile(outputPath);
        // console.log(`Optimized ${file} -> ${outputPath}`);
        
        // Remove original to save space if it's a different extension
        if (inputPath !== outputPath) {
            fs.unlinkSync(inputPath);
        }
    }
}

(async () => {
    try {
        console.log('Starting optimization...');
        await optimizeDirectory(path.join(__dirname, 'public', 'Members'), 'webp', 400);
        await optimizeDirectory(path.join(__dirname, 'public', 'frames'), 'webp', 1280);
        console.log('Optimization complete!');
    } catch (e) {
        console.error(e);
    }
})();
