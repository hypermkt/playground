const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      // https://jp.vuejs.org/v2/guide/installation.html#%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0-%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9%E3%81%A8%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0%E9%99%90%E5%AE%9A%E3%81%AE%E9%81%95%E3%81%84
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
