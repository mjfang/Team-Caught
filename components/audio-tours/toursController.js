'use strict';

caughtApp.controller('toursController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {
  	$scope.main.title = 'Tours';
  	var tourList = $resource("/tours", {}, {get: {method: 'get', isArray: true}});
  	$scope.tourList = tourList.get({}, function () {
  		console.log($scope.tourList);
  	});
  }]);
