var app = angular.module("youtubeApp", []);

var apiKey = "AIzaSyD3pT_2BEZ4StGCB3BP5W8rmDypJ-sbiBI";
var searchText = "news";

app.controller("VideoController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout) {

 $scope.$watch("search", function(search) {
 	var time;
	if (search != undefined) { searchText = search; time = 1000; }
	else time = 0;
	var youtube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchText + "&maxResults=12";
	$timeout(function() {
		$http({
	    url: youtube + "&key=" + apiKey + "&callback=JSON_CALLBACK",
	    method: "jsonp"
	  }).success(function(data, status) {
	    $scope.videos = data.items;
		})
	}, time);
});


}]);