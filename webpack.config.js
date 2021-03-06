const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css"
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public') + '/index.html'
    })
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules'
    ]
  },

  devServer: {
    contentBase: './public',
    compress: true,
    port: 9000,
    inline: true,
    historyApiFallback: true,
    stats: {
      version: false,
      hash: false,
      chunckModules: false
    }
  }
};
