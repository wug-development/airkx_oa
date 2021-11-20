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
        ['@babel/plugin-proposal-class-properties', {legacy: false}] // 编译类
    ]
}