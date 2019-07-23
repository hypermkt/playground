# Chapter 5 データベース

## 5-1 マイグレーション

### わかったこと
* マイグレーションコマンド
* マイグレーションの事項状態を管理するテーブルがある

## 5-2 シーダー
* シーダー
  * アプリケーションの実行に必要だデータを使って投入する
  * マスターデータ
  

### エラーに少しハマった
シーディング実行時にエラーが発生した。原因はautoloadされていなかったのが原因。`composer dump-autoload` を実行したら解決した。

refs: [\[PHP\] laravelでseederを利用 \- Qiita](https://qiita.com/kshimadutsu/items/f2558419718b47ed0c5d)
```bash
$ dc exec app php artisan db:seed
Seeding: AuthorsSeeder

   ReflectionException  : Class AuthorsSeeder does not exist

  at /var/www/app/vendor/laravel/framework/src/Illuminate/Container/Container.php:790
    786|         if ($concrete instanceof Closure) {
    787|             return $concrete($this, $this->getLastParameterOverride());
    788|         }
    789|
  > 790|         $reflector = new ReflectionClass($concrete);
    791|
    792|         // If the type is not instantiable, the developer is attempting to resolve
    793|         // an abstract type such as an Interface or Abstract Class and there is
    794|         // no binding registered for the abstractions so we need to bail out.

  Exception trace:

  1   ReflectionClass::__construct("AuthorsSeeder")
      /var/www/app/vendor/laravel/framework/src/Illuminate/Container/Container.php:790

  2   Illuminate\Container\Container::build("AuthorsSeeder")
      /var/www/app/vendor/laravel/framework/src/Illuminate/Container/Container.php:667

  Please use the argument -v to see more details.
```

* Fakerでロケールを指定できるの知らなかった

## 5-3 Eloquent

### わかったこと
* $fillable
    * ホワイトリスト
    * Mass Assignment対策
* $guarded
    * ブラックリスト方式
* findOrFail, エラーをキャッチして、特定のレスポンスを返す際に便利
* all, find, findOrFail, where, create, save, update
* データ削除
    * インスタンスに対して: delete
    * ファサード: destroy

### わからないこと
* 
