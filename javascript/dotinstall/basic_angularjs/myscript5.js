var sampleApp = angular.module('sampleApp', []);
sampleApp.controller('Sample', function($scope) {
  $scope.prefs = [
    {"name": "北海道", "value": 1},
    {"name": "青森", "value": 2},
    {"name": "岩手", "value": 3},
    {"name": "秋田", "value": 4},
    {"name": "山形", "value": 5},
    {"name": "千葉", "value": 6},
    {"name": "埼玉", "value": 7},
    {"name": "群馬", "value": 8},
    {"name": "長野", "value": 9},
  ];
});
