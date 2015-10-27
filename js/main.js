var app = angular.module("youtubeApp", []);

var apiKey = "AIzaSyD3pT_2BEZ4StGCB3BP5W8rmDypJ-sbiBI";
var youtube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=news&maxResults=12&order=date";

app.controller("MainController", ["$scope", "$http", function($scope, $http) {
	$http({
    url: youtube + "&key=" + apiKey + "&callback=JSON_CALLBACK",
    method: "jsonp"
  }).success(function(data, status) {
    $scope.videos = data.items;
  });
}]);