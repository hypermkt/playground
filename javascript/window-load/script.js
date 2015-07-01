"use strict";
$(function() {
  var checkImageSize = function() {
    $("#img01-width").text($("#img01").width());
  }
  var checkImageSize2 = function() {
    $("#img02-width").text($("#img02").width());
  }

  // 画像を含めて全て読み込み終わったら実行する
  $(window).load(function () {
    checkImageSize();
    checkImageSize2();
  });

  // Windowサイズが変更されている間ずっと実行される
  $(window).resize(function() {
    checkImageSize();
  });

  // Windowサイズの変更が完了したら実行される
  var timer = false;
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      checkImageSize2();
    }, 200);
  });
});
