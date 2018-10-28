package main

import (
	"fmt"

	"github.com/mmcdole/gofeed"
)

func main() {
	// := 演算子 左辺の変数を定義して、右辺の値を入れる
	url := "http://cal.syoboi.jp/rss2.php"
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(url)
	items := feed.Items

	// _ で値を捨てられる。この変数を使用する目的として、コンパイル時の未使用変数エラーを無くすため。
	for _, item := range items {
		fmt.Println(item.Title)
	}
}
