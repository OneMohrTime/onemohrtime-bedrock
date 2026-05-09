import { defineConfig } from 'vite';
import path from 'path';

const themeDir = 'wp-content/themes/onemohrtime';

export default defineConfig({
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
