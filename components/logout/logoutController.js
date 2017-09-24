'use strict';

caughtApp.controller('logoutController', ['$scope', '$routeParams', '$resource', '$location', '$rootScope',
  function ($scope, $routeParams, $resource, $location, $rootScope) {
    $scope.$on('CloseSesame', function() {
        $scope.noOneIsLoggedIn = true;
        $location.path("/login");
    });

    $scope.logout = function() {
        var logoutRes = $resource('/admin/logout');
        logoutRes.save({}, function() {
            $rootScope.$broadcast('CloseSesame');
        });
    };
  }]);
