import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        react(),
        copy({
            targets: [
                { src: 'src/popup.html', dest: 'dist' } // ✅ Ensure popup.html is copied
            ],
            hook: 'writeBundle'
        })
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                background: resolve(__dirname, 'src/background.ts')
            },
            output: {
                dir: 'dist',
                entryFileNames: '[name].js',
                format: 'esm'
            }
        }
    }
});
