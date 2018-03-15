const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' },
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
        ]
    },
    devServer: {
        //contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'ReactButstrapp',
        template: './index.html',
        inject: 'body'
    })]
};
