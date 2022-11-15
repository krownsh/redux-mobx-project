const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');

const webpackConfigProd ={
    mode:'production',
    plugins:[
        new CleanWebpackPlugin({  //清除打包輸出的歷史文件
            protectWebpackAssets:true,

        }),
        new HtmlWebpackPlugin({
            inject:'body',
            title:'React APP',
            filename:'index.html',
            template:path.join(__dirname, '../src/index.html')
        })
    ]
}
module.exports = merge(webpackConfigProd,webpackConfigBase)