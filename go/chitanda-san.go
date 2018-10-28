package main

import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	// := 演算子 左辺の変数を定義して、右辺の値を入れる
	url := "http://cal.syoboi.jp/rss2.php"

	// 複数の戻り値を持つことができる
	resp, err := http.Get(url)
	if err != nil {
		// handle error
	}
	b, err := ioutil.ReadAll(resp.Body)

	type Item struct {
		Title string `xml:"title"`
		Link  string
	}
	type Channel struct {
		Title string `xml:"title"`
	}
	// item := new(Item)
	channel := new(Channel)

	if err := xml.Unmarshal([]byte(b), &channel); err != nil {
		fmt.Println("errored")
	}
	fmt.Println("here")
	fmt.Printf("channel.title = %v", channel.Title)

	// fmt.Printf("%s", b)
	// fmt.Println(resp.StatusCode)
	// fmt.Println(err)

}
