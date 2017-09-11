# 奥が深いDNSサーバーとdigコマンド

## はじめに
こんにちわ、とあるソフトウェアエンジニアです。先日インフラエンジニアの方とネームーサーバーの切り替え作業を実施ししました。その際に、ローカル環境からとあるドメイン名のレコード情報が切り替わってことに気づき、少しハマってしまい、DNSサーバーに関する知識が足りないことが分かりました。（作業自体は、インフラエンジニアの方に進めてもらったので全く問題なし） 原因は自分がキャッシュDNSサーバーの存在を把握しておらず、調査に余計な時間をかけてしまいました。

本記事はDNSサーバーとdigコマンドの知識の整理のためまとめます。

## digコマンドとは

digは、DNSサーバーから情報を収集するために使われる柔軟なコマンドラインツールです。

## 重要な前知識

DNSサーバーのクエリーには2種類ある

1. クライアントからキャッシュDNSサーバーへのクエリー
1. キャッシュDNSサーバーから権威DNSサーバーへのクエリー

以下の図の緑の丸が1番、黄色の丸が2番のクエリーを指します。

### 再帰的クエリーとは

* **クライアント**から**キャッシュDNSサーバー**へのクエリー
* クエリー中にRDビット = 1がセットされている

### 非再帰的クエリーとは

* **キャッシュDNSサーバー**から**権威DNSサーバー**へのクエリー
* クエリー中にRDビットがセットされていない

## digコマンドの書式

digコマンドは以下の書式で利用します。オプション、DNSサーバー、クエリタイプの指定は任意です。

```sh
$ dig +dnssec @192.0.2.53 example.jp SOA
      ------- ----------- ---------- ---
      |       |           |           | 
      |       |           |           -- クエリタイプ 
      |       |           --- 対象ドメイン名
      |       --- DNSサーバー
      --- オプション
```

`yahoo.co.jp`を指定すると、以下の結果が返ってきます。

```sh
$ dig yahoo.co.jp @ns02.yahoo.co.jp

; <<>> DiG 9.8.3-P1 <<>> yahoo.co.jp @ns02.yahoo.co.jp
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 44456
;; flags: qr aa rd; QUERY: 1, ANSWER: 2, AUTHORITY: 4, ADDITIONAL: 4
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;yahoo.co.jp.     IN  A

;; ANSWER SECTION:
yahoo.co.jp.    300 IN  A 183.79.135.206
yahoo.co.jp.    300 IN  A 182.22.59.229

;; AUTHORITY SECTION:
yahoo.co.jp.    900 IN  NS  ns11.yahoo.co.jp.
yahoo.co.jp.    900 IN  NS  ns02.yahoo.co.jp.
yahoo.co.jp.    900 IN  NS  ns12.yahoo.co.jp.
yahoo.co.jp.    900 IN  NS  ns01.yahoo.co.jp.

;; ADDITIONAL SECTION:
ns01.yahoo.co.jp. 900 IN  A 118.151.254.133
ns02.yahoo.co.jp. 900 IN  A 118.151.254.149
ns11.yahoo.co.jp. 900 IN  A 124.83.255.37
ns12.yahoo.co.jp. 900 IN  A 124.83.255.101

;; Query time: 45 msec
;; SERVER: 118.151.254.149#53(118.151.254.149)
;; WHEN: Tue Jul 25 21:26:07 2017
;; MSG SIZE  rcvd: 201
```

## 出力結果の見方

### ヘッダー

各セクションに関するステータスやフラグを格納しています。

* status: 応答コード
    * NOERROR: 正常な応答
    * REFUSED: リクエストが拒否された
* flags: ヘッダーに含まれるビット
    * qr: 応答であることを示す
    * rd: 再帰的な階層を辿ったことを示す
    * ra: 再帰的な検索要求が可能であることを示す

### Questionセクション

```sh
;; QUESTION SECTION:
;yahoo.co.jp.     IN  A
```

* 問い合わせ内容がそのまま表示される

### Answerセクション
```sh
;; ANSWER SECTION:
yahoo.co.jp.    295 IN  A 183.79.135.206
yahoo.co.jp.    295 IN  A 182.22.59.229
```

* 問い合わせた内容に対応するリソースレコードが格納される

### Authorityセクション

```sh
;; AUTHORITY SECTION:
yahoo.co.jp.    900 IN  NS  ns11.yahoo.co.jp.
yahoo.co.jp.    900 IN  NS  ns02.yahoo.co.jp.
yahoo.co.jp.    900 IN  NS  ns12.yahoo.co.jp.
yahoo.co.jp.    900 IN  NS  ns01.yahoo.co.jp.
```

* 権威を持っているDNSサーバーの情報を格納


### 応答時間・サイズなど

```sh
;; Query time: 43 msec
;; SERVER: 192.168.1.230#53(192.168.1.230)
;; WHEN: Tue Jul 25 20:04:53 2017
;; MSG SIZE  rcvd: 61
```

* Query time: 問い合わせにかかった時間
* SERVER: 問い合わせたネームサーバー
* WHEN: 実行時刻
* MSG SIZE: 受信時のバイト数？

## 使い方

### 指定リソースコード別問い合わせ

```sh
$ dig yahoo.co.jp a
```

### ネームサーバーを指定して問い合わせ
```sh
$ dig yahoo.co.jp a @ns02.yahoo.co.jp.
```

### 出力結果の簡易表示

```sh
$ dig a yahoo.co.jp +short
182.22.59.229
183.79.135.206
```

### bindのバージョンを調べる
`chaos txt version.bind`オプションbindのバージョンを調べることが出来る。が、恐らくこれを公開すると脆弱性の対象になってしまうので、運用上は公開する所は殆ど無いでしょう。

```sh
$ dig @ns1.jprs.co.jp chaos txt version.bind

; <<>> DiG 9.8.3-P1 <<>> @ns1.jprs.co.jp chaos txt version.bind
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26049
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 0
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;version.bind.      CH  TXT

;; ANSWER SECTION:
version.bind.   0 CH  TXT ""

;; AUTHORITY SECTION:
version.bind.   0 CH  NS  version.bind.

;; Query time: 9 msec
;; SERVER: 202.11.16.49#53(202.11.16.49)
;; WHEN: Tue Jul 25 21:43:15 2017
;; MSG SIZE  rcvd: 57
```

## おわりに

## 参考

* [インターネット10分講座：DNSキャッシュ \- JPNIC](https://www.nic.ad.jp/ja/newsletter/No51/0800.html)
* [Man page of DIG](https://linuxjm.osdn.jp/html/bind/man1/dig.1.html)
* [初心者のためのDNS運用入門 - トラブルとその解決のポイント -](https://dnsops.jp/event/20130719/20130719-dns-beginners-guide-mizuno-2.pdf)
