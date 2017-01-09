const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// ソースマップはデバッグ用なので作成を無効にする
// ref: https://laravel.com/docs/5.3/elixir
elixir.config.sourcemaps = false;

elixir(mix => {
  // scriptsメソッドで指定ファイルを結合できる。ピリオドからの場合はアップルート直下からの相対パスとなる。結果のJavaScriptは public/js/all.jsに出力される。
  // ref: https://readouble.com/laravel/5.3/ja/elixir.html
  mix.scripts(['./node_modules/jquery/dist/jquery.js', 'main.js']);
});
