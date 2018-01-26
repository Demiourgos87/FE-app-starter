var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    path = require('path');

// ----- Output file paths
var outputDir = 'dist/',
    cssOutput = 'css/style.[chunkhash:8].css',
    jsOutput = 'js/[name].[chunkhash:8].bundle.js';

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: jsOutput
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'postcss-loader', 'sass-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /(node_modules|img)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                exclude: /(node_modules|fonts)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/img/'
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        attrs: ['img:src', 'source:srcset']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new ExtractTextPlugin(cssOutput),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
