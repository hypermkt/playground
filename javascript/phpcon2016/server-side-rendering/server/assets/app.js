module.exports = function () {
  return new Vue({
    template: '<div id="app">Helo PHPカンファレンス{{ year }}!</div>',
    data: {
      year: 2016
    }
  })
} 
