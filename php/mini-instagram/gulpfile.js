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
    mix.sass('app.scss')
       .webpack('app.js');
});
