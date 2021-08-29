import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'vue': 'vue/dist/vue.esm-bundler.js', // 不配置它 会显示空白页面
        }
    },
    optimizeDeps: {
        include: ['lodash']
    },
    cssPreprocessOptions: {
        scss: {
            additionalData: '@import "./src/assets/scss/ant-global.scss"'
        }
    },
    plugins: [vue()]
})
