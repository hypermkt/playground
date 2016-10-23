'use strict'

var fs = require('fs')
var path = require('path')

// サーバサイドで利用するため、グローバル変数に Vue を定義する
global.Vue = require('vue')

var layout = fs.readFileSync('./index.html', 'utf8')

var renderer = require('vue-server-renderer').createRenderer()

// express サーバを生成する
var express = require('express')
var server = express()

// assets ディレクトリは静的にファイルを転送する。
server.use('/assets', express.static(
  path.resolve(__dirname, 'assets')
))

server.get('/', function (request, response) {
  renderer.renderToString(
    // Vue.js アプリケーションインスタンスを生成
    require('./assets/app')(),
    function (error, html) {
      // アプリケーションの HTML とともにレイアウトを送信する
      response.send(layout.replace('<div id="app"></div>', html))
    }
  )
})

// 5000番ポートで待機
server.listen(5000, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:5000')
})
