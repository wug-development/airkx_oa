const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 打包结果中，文件的体积大小、各模块依赖关系、文件是够重复等问题，
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 清除用不到的css
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob'); // 文件匹配模式
// 压缩JS
const TerserPlugin = require('terser-webpack-plugin');
// vue加载器
const { VueLoaderPlugin } = require("vue-loader");
const tsImportPluginFactory = require('ts-import-plugin')
// Gzip
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const cdn = require('./cdn.cjs.js')

function resolve(dir) {
    return path.join(__dirname, dir);
}
const PATHS = {
    src: resolve('src')
}
module.exports = (env, { mode }) => {
    const config = {
        mode, // 模式 
        entry: './src/main.ts', // 打包入口地址
        output: {
            filename: 'js/[name].js',
            publicPath: "http://test.airkx.cn/",
            chunkFilename:'js/[name].[hash:8].js',
            path: resolve('dist')
        },
        resolve: {
            alias: {
                '~': resolve('src'),
                '@': resolve('src'),
                'components': resolve('src/components'),
                'ant-design-vue$': 'ant-design-vue/es/index.js',
                'vue-router$': 'vue-router/dist/vue-router.cjs.js',
                '@ant-design/icons-vue$': '@ant-design/icons-vue/lib',
            },
            extensions: ['.js', '.json', '.vue', '.ts'],
            modules: ['node_modules']
        },
        // 自定义loader
        // resolveLoader: {
        //     modules: ['node_modules', resolve('loader')]
        // },
        
        cache: {
            type: 'filesystem',
        },
        module: {
            noParse: /jquery|lodash/, // 略的模块文件中不会解析 import、require 等语法
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件
                    // exclude: /node_modules/,
                    generator: {
                        // 输出文件位置以及文件名
                        filename: "css/[name][hash:8][ext]"
                    },
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
                },
                {
                    test: /\.less$/i,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' },
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset',
                    generator: {
                        // 输出文件位置以及文件名
                        // [ext] 自带 "." 这个与 url-loader 配置不同
                        filename: "image/[name][hash:8][ext]"
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10 * 1024 //超过50kb不转 base64
                        }
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                    type: 'asset',
                    generator: {
                        // 输出文件位置以及文件名
                        filename: "font/[name][hash:8][ext]"
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10 * 1024 // 超过100kb不转 base64
                        }
                    }
                },
                {
                    test: /\.tsx?$/i,
                    include: resolve('src'),
                    exclude: /node_modules/,
                    use: [{
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({
                                before: [tsImportPluginFactory({
                                    libraryName: 'antd',
                                    libraryDirectory: 'lib',
                                    style: true
                                })]
                            }),
                            compilerOptions: {
                                module: 'es2015'
                            },
                            appendTsSuffixTo: [/\.vue$/]
                        },
                        // options: {
                        //     configFile: path.resolve(__dirname, './tsconfig.json'),

                        // }
                    }]
                },
                {
                    test: /\.js$/i,
                    include: resolve('src'),
                    exclude: /node_modules/,
                    generator: {
                        // 输出文件位置以及文件名
                        filename: "js/[name][hash:8][ext]"
                    },
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env'
                                ],
                                cacheDirectory: true // 启用缓存
                            }
                        },
                        {
                            loader: 'thread-loader', // 开启多进程打包
                            options: {
                                worker: 3,
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(), // 清空dist目录
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html',
                title: 'OA管理系统',
                inject: 'body',
                cdn,
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash:8].css'
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'disabled',  // 不启动展示打包报告的http服务器
                generateStatsFile: false, // 是否生成stats.json文件
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    productionSourceMap: true, //sourcemap
                },
            }),
            new CompressionPlugin(), // gzip
            new PurgecssWebpackPlugin({
                paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
            }),
        ],
        optimization: {
            minimize: true,
            minimizer: [
                // 添加 css 压缩配置
                new OptimizeCssAssetsPlugin({}),
                new TerserPlugin({})
            ],
            splitChunks: {
                chunks: 'all', // 有效值为 `all`，`async` 和 `initial`
            },
        },
        externals: {
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter',
            'ant-design-vue': 'antd'
        },
        performance: {
            hints: 'warning', // 枚举 false关闭
            maxEntrypointSize: 100000000, // 最大入口文件大小
            maxAssetSize: 100000000, // 最大资源文件大小
            assetFilter: function (assetFilename) { //只给出js文件的性能提示
                return assetFilename.endsWith('.js');
            }
        }
    }
    // config.devtool = 'source-map'
    return config
}