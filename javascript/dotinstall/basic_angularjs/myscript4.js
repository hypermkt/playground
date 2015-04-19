var sampleApp = angular.module('sampleApp', []);
sampleApp.controller('Sample', function($scope) {
  $scope.users = [
    {"name": "taguchi", "score": 55.22},
    {"name": "tanaka", "score": 38.22},
    {"name": "yamada", "score": 11.22},
  ];
  $scope.today = new Date();
});
