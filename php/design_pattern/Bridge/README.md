# Bridgeパターンとは
機能を提供するクラス群と実装を提供するクラス群を分ける事を目的としている。

## 概要
* 機能を提供するクラス側(DataSource_Listening)でクライアント側に提供するAPIを定義する
* またそのクラスを継承(DataSource_ExtendedListening)する事で機能の拡張もしている。

## メリット
* クラス階層の見通しが良くなる
* 機能拡張と実装の切り替えが容易

## 実行例

```sh
$ php bridge_client.php
Hoge
Fuga
Age
Hoge
Fuga
Age
```
