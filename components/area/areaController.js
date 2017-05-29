'use strict';

caughtApp.controller('areaController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {
  	$scope.main.title = $routeParams.name;
  	var worksModel = $resource(main.url_prefix + "/area/:name", {}, {get: {method: 'get', isArray: true}});
  	$scope.workList = worksModel.get({name:$routeParams.name}, function () {
  		console.log($scope.workList)
  	});

  }]);
