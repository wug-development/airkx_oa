import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import htmlTemplate from 'vite-plugin-html-mpa'
import ViteHtmlPluginOption from './html-mpa'

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
    plugins: [
        vue(),
        htmlTemplate(ViteHtmlPluginOption)
    ],
    server: {
        host: 't.airkx.cn'
    }
})
