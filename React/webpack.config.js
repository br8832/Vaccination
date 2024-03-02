//#6
let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin')

config = {
    output: {
        path: path.join(__dirname, '/dist'), //dist - distribution
        filename: 'bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 9090,
        historyApiFallback : true //localhost:9090/user
    },
    // Rules  babel-loaderof how webpack will take our files, complie & bundle them for the browser 
    module: {
         
        rules: [
            { test: /qrcode/, loader: 'exports-loader?QRCode' },
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] //localhost:9090 - loads this html
}

module.exports = config