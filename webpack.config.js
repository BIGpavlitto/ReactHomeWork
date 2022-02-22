const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

//Если значения переданы стрингой, то это базовые настройки

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        port: 3001,
        hot: true,
        historyApiFallback: {index: '/'},       //Отвечает за загрузку страницы, независимо какой адрес всегда правильную react app. Сервер должен сдать один и тот же файл js и html
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
    }),
        new ReactRefreshWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [require.resolve('@babel/preset-env'), require.resolve("@babel/preset-react")],
                        //Автообновление, чтобы не терялся state             //Styled-components для css внутри каждого компонента
                        plugins: [require.resolve('react-refresh/babel'), require.resolve('babel-plugin-styled-components')],
                        },
                    },
                ],
            },
            {
                test: /\.c[sa]ss$/i,
                use: ['style-loader', /*'sass-loader'*/ {
                    //Загрузили сss-loader вместо стандартной формы css
                    loader: 'css-loader',
                    options: {
                        //При данной настройке будет отображаться стринга с длинным нечитаемым для человека кодом
                        //modules: true,
                        //При данной настройке можно отфильтровать что отображать в аттрибутах css
                        modules: {
                            localIdentName: '[name][local]__[hash:base64:5]',
                        },
                    },
                }],
            },
        ],
    },
    resolve:{
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
            ],
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
    }
}