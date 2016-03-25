var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var indexPath = path.resolve(__dirname, 'src/index.js');
var outputPath = path.resolve(__dirname, 'public');
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    indexPath
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  'display-error-details': true,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
      {
        test: /.less$/,
        loader: ExtractTextPlugin.extract('css!less')
      },
      {
        test: /\.(jpg|png|mp3|svg)$/,
        loaders: ['file?name=assets/[name].[ext]']
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
    new webpack.ProvidePlugin({
      'React': path.resolve(__dirname, "node_modules/react/react"),
      'ReactDOM': path.resolve(__dirname, "node_modules/react-dom/dist/react-dom"),
      "jQuery": path.resolve(__dirname, "node_modules/jquery/dist/jquery"),
      "$": path.resolve(__dirname, "node_modules/jquery/dist/jquery")
    }),
    new ExtractTextPlugin("[name].css?[hash]-[chunkhash]", {
      allChunks: true,
      disable: false
    }),
    new HtmlWebpackPlugin({
      title: 'React Blog in ES6',
      template: './src/index.html'
    })
  ]
};
