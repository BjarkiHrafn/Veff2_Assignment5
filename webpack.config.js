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
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader', },
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            {
              test: /\.css$/,
              use: [
                require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: "[name]__[local]__[hash:base64:5]"
                  },
                },
                {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                      require('postcss-flexbugs-fixes')
                    ]
                  },
                },
              ],
            }
        ]
    },

    devServer: {
        //contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: false,
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'ReactButstrapp',
        template: './index.html',
        inject: 'body'
    })]
};
