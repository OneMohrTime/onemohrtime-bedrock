import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const themeDir = 'wp-content/themes/onemohrtime';

function copyImages() {
    return {
        name: 'copy-images',
        closeBundle() {
            const src = path.resolve(__dirname, `${themeDir}/src/images`);
            const dest = path.resolve(__dirname, `${themeDir}/assets/img`);
            if (fs.existsSync(src)) {
                fs.cpSync(src, dest, { recursive: true });
            }
        },
    };
}

export default defineConfig({
    plugins: [copyImages()],
    build: {
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, `${themeDir}/src/scripts/app.js`),
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'css/[name][extname]';
                    }
                    return 'img/[name][extname]';
                },
            },
        },
        outDir: `${themeDir}/assets`,
        emptyOutDir: false,
        sourcemap: true,
    },
});
