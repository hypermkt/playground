# PHPで支える大規模アーキテクチャー

* Lambda/Kappa Architecture
    * AWSのあれとは違う
* Cassandra
* Kafka
* 問題
    * 検索が遅くなる
    * インデックスは貼ってある
    * LIKE句
    * 全文検索
    * PV集計用のログ
* 考察
    1. Elasticsearchへの挿入
    1. バッチ処理で定期処理
* 大量のレコードを取得してテーブルロック
* Application -> Database, Application -> Producer -> Massage Queue -> Consumer -> Elasticsearch
* 事業成長による大きなアプリケーションへ
* BigDataを伴うアプリケーションの課題
    * バッチ処理が終わらない
    * 正規化したデータは絶対にRDBMS
* BigDataへのアプローチ
    * 分散ストレージ採用
        * Hadoop
* ラムダアーキテクチャー
    * バッチ層、サービス層、スピード層で構成
* Spark
    * 分散処理フレームワーク
* Kappaアーキテクチャー
* Apache Cassandra
    * PHPから利用可能
    * スケールが容易
    * SQLインターフェース
    * 大量データの書き込みに対応
    * RDBMS感覚では使えない
* Apache Kafka
    * PHPから利用可能
    * SparkとStormと容易に連携可能
* Presto
* まとめ
