# Webpack入門
## まず初めに
### 背景	
* 2017年10月 画像の複数アップロード機能をきっかけにWebpackを利用したビルドシステムが導入
* Webpackがよく分かっていない

### 環境
* Webpack v4
* npm 5.6.0
* Node.js v9.4.0

### 対象者
* Webpackの名前は聞いたことがあり、概要も少し分かる
* Webpackを最初から一人で設定はできない開発者・デザイナー向け

### ゴール

### 出来るようになる

## Webpack徹底入門
### Webpackとは
* モダンなJavaScriptアプリケーション向けのモジュールバンドラーである

#### モジュールバンドラーとは
* 複数のモジュール(.js, .sassなど)を一つのファイルにまとめてくれるもの

#### 現在のWeb開発における課題
ここを強調する

#### Webpackを使うと良いこと
* リクエスト数を減らすことで高速化
* 

### コンセプト
* Entry
* Output
* Loaders
* Plugins

####  Entry
エントリポイントは、Webpackが内部の依存グラフの中からどのモジュールを使用すべきか把握するのに使用する
[Concepts](https://webpack.js.org/concepts/#entry)

#### Output
アウトプットは、Webpackに作成したバンドルファイルをどこに出力し、名前を何にするのかを使えるもの
[Concepts](https://webpack.js.org/concepts/#output)

#### Loaders
ローダーを活用することで、単なるJavaScript以外も処理できるようになる。すべての種類のファイルをバンドルできる。
[Concepts](https://webpack.js.org/concepts/#loaders)

#### Plugins
ファイルの圧縮などのビルド実行時に様々な処理を追加することができる
[Concepts](https://webpack.js.org/concepts/#plugins)

### 設定方法
#### Entry
* オブジェクトに複数のキーが指定可能

```javascript
entry: {
  home: "./home.js",
  about: "./about.js",
  contact: "./contact.js"
}
```


#### Output
* ファイル名を文字列で指定する
	* `filename: "bundle.js"`
* エントリー名を指定する
	* `filename: "[name].bundle.js"`

#### Module

##### module.rules
* Ruleの配列

##### Rule.exclude
* 除外条件

##### Rule.use
* モジュールに適用されるUseEntriesの一覧
* 各々のEntryに適用されるローダーが指定されている

[Module](https://webpack.js.org/configuration/module/#useentry)

```
module: [
	{
		test: /\.js$/,
		use: [
			{
				loader: 'babel-loader',
				options: {
			        presets: ["es2015"],
			        plugins: ["transform-async-to-generator"]
				}
			}
		]
	}
]
```

### 利用事例 Webpack + Vue.js



## メモ
* npx コマンド
	* ローカルインストールしたパッケージを実行する
* module.exports

## 参考
* [webpack 入門 （v3系 対応） \- Qiita](https://qiita.com/soarflat/items/28bf799f7e0335b68186)
* [webpack](https://webpack.js.org/)
* [npm 5\.2\.0の新機能！ 「npx」でローカルパッケージを手軽に実行しよう \- Qiita](https://qiita.com/tonkotsuboy_com/items/8227f5993769c3df533d)
* [webpack入門 \- Qiita](https://qiita.com/ossan-engineer/items/8352bdeab9ce8c8c00ef)
* [サンプルで学ぶwebpack 2入門：Web開発を超効率化する必須ツールの使い方 \- WPJ](https://www.webprofessional.jp/beginners-guide-to-webpack-2-and-module-bundling/)
* [Front End Center — Webpack from First Principles \- YouTube](https://www.youtube.com/watch?v=WQue1AN93YU)

#frontend