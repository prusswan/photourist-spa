// Note: You must restart bin/webpack-watcher for changes to take effect

var path = require('path')
var glob = require('glob')
var extname = require('path-complete-extname')

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: glob.sync(path.join('..', 'app', 'javascript', 'packs', '*.js*')).reduce(
    function(map, entry) {
      var basename = path.basename(entry, extname(entry))
      map[basename] = entry
      return map
    }, {}
  ),

  output: { filename: '[name].js', path: path.resolve('..', 'public', 'packs') },

  module: {
    rules: [
      {
        test: /.json$/,
        loader: "file-loader",
        query: {
          context: '../app/javascript/yo',
          name: '[path][name].[ext]',
          outputPath: '../'
        }
      },
      { test: /\.coffee(.erb)?$/, loader: "coffee-loader" },
      {
        test: /\.js(.erb)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'latest', { 'es2015': { 'modules': false } } ]
          ]
        }
      },
      {
        test: /.erb$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'rails-erb-loader',
        options: {
          runner: 'DISABLE_SPRING=1 ../bin/rails runner'
        }
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /.html$/,
        loaders: [
          'html-loader'
        ]
      }
    ]
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: '../index.html',
  //     template: path.resolve('../app/javascript/yo/index.html')
  //   }),
  // ],

  resolve: {
    extensions: [ '.js', '.coffee' ],
    modules: [
      path.resolve('../app/javascript'),
      path.resolve('../vendor/node_modules')
    ]
  },

  resolveLoader: {
    modules: [ path.resolve('../vendor/node_modules') ]
  }
}
