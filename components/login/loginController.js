'use strict';

caughtApp.controller('loginController', ['$scope', '$routeParams', '$resource', '$location', '$rootScope',
  function ($scope, $routeParams, $resource, $location, $rootScope) {
  		$scope.loginName='';
  		$scope.password = '';
  		$scope.text = {
  			LoginError : ''
  		};

  		$scope.login = function() {
  			var userRes = $resource('/admin/login');
  			console.log($scope.loginName);
  			userRes.save({login_name:$scope.loginName, password:$scope.password}, function(user) {
  				//success
  				console.log("success logging in");
  				$scope.noOneIsLoggedIn = false;

  				// console.log(Object.keys(uid));
  				// console.log("/user/" + uid);
  				$rootScope.$broadcast('OpenSesame');
  				$location.path("/splash");

  				console.log();

  			}, function errorHandling(err) {
  				//error
  				console.log("fail login");
  				console.log(err);
  				$scope.password = '';
  				if(err.data === "Wrong password!") {
	  				$scope.text.LoginError = "Wrong Password!";
	  			}
	  			if(err.data === "User not found!") {
	  				$scope.text.LoginError = "User not found!";
	  			}
  			});
  		};
  }]);
