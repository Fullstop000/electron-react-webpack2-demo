const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const UI_PATH = path.resolve(APP_PATH,'ui')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

// const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        path.resolve(UI_PATH, 'index.jsx'),
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        // webpack2 use 'rules' instead of 'loaders'
        rules: [
            // preloaders are included in rules by using 'enforece:'pre'
            // {
            //     enforce: 'pre',
            //     test: /\.(jsx|js)$/,
            //     loader: 'eslint-loader',
            //     query: {
            //         configFile: './.eslintrc.json'
            //     },
            //     exclude: [/node_modules/]
            // },
            {
                test:/\.(jsx|js)$/,
                loader: 'babel-loader',
                include:APP_PATH
            },
            // {
            //     test:/\.html$/,
            //     loader: 'html'
            // },
            // {
            //     test: /\.css$/, 
            //     loader: "style!css"
            // },
            // {
            //     test:/\.scss$/,
            //     loaders:['style-loader','css-loader','sass-loader?sourceMap']
            // }
        ]
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
};