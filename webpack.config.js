const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");

module.exports = {
  entry: glob.sync("./dist/css/**/*.css"),
  output: {
    path: __dirname + '/dist',
    filename: 'pivotal-ui.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("components.css")
  ]
};