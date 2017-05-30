'use strict';

caughtApp.controller('mapController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {
  		window.onLoad = function() {
  			imageMapResize();
  			console.log("imageMapResize");
  		}
  		
  }]);
