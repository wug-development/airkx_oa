module.exports = {
    presets: ["@vue/cli-plugin-babel/preset", "@babel/typescript"],
    overrides: [
        {
            "test": /\.vue$/,
            "plugins": ["@babel/transform-typescript"]
        }
    ],
    plugins: [
        // ['import', {libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true}],
        [
            'import',
            { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }
        ],
        '@babel/plugin-transform-arrow-functions', // 箭头函数处理
        ['@babel/plugin-proposal-decorators', {legacy: true}], // 装饰器处理
        ['@babel/plugin-proposal-class-properties', {legacy: false}], // 编译类
        '@babel/plugin-proposal-nullish-coalescing-operator', // && 处理
        '@babel/plugin-proposal-optional-chaining', // ?. 可选链
        '@babel/plugin-transform-runtime' // 将 helper 和 polyfill 都改为从一个统一的地方引入
    ]
}