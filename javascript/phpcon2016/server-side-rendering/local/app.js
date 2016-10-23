'use strict'

var fs = require('fs')

// 画面レイアウト用HTMLを取得
var layout = fs.readFileSync('./index.html', 'utf8')

// Step 1: Vue インスタンスの生成
var Vue = require('vue')
var app = new Vue({
  template: '<div id="app">{{ message  }}</div>',
  data: {
    message: 'Hello, PHPカンファレンス2016!'
  }
});

// Step 2: renderer の生成
var renderer = require('vue-server-renderer').createRenderer()

// Step 3: Vue instance を描画し HTML に変換
renderer.renderToString(app, function (error, html) {
  if (error) throw error
  console.log(layout.replace('<div id="app"></div>', html))
})
