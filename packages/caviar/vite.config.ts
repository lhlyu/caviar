import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        minify: true,
        lib: {
            entry: './src/index.ts',
            name: 'caviar'
        }
    }
})
