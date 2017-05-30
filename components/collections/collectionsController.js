'use strict';

caughtApp.controller('collectionsController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {
  	$scope.main.title = $routeParams.name;
  	var worksModel = $resource("/collection", {}, {get: {method: 'get', isArray: true}});
  	$scope.workList = worksModel.get({name:$routeParams.name}, function () {
  		console.log($scope.workList)
  	});

  }]);
