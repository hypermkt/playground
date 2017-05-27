var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './app.jsx',
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },  
  // devtool: "source-map",
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      },      
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};

