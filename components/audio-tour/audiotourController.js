'use strict';

caughtApp.controller('audiotourController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {
  	$scope.main.title = '';
  	var tour_id = $routeParams.tour_id
  	var tourModel = $resource("/tour/:tour_id", {});
  	$scope.tour = tourModel.get({tour_id:$routeParams.tour_id}, function () {
  		
  	});
  }]);
