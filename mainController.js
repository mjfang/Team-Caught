'use strict';

var caughtApp = angular.module('caughtApp', ['ngRoute', 'ngMaterial', 'ngResource', 'ngMasonry']);

var url_prefix = "" //use ~mjfang/Team-Caught/ to correct images srces when hosting... 

caughtApp.config(['$routeProvider', 
    function ($routeProvider) {
        $routeProvider.
            when('/splash', {
                templateUrl: 'components/splash/splashTemplate.html',
                controller: 'splashController'
            }).
            when('/about', {
                templateUrl: 'components/about/about.html',
                controller: 'aboutController'
            }).
            when('/main', {
                templateUrl: 'components/main/mainPageTemplate.html',
                controller: 'mainPageController'
            }).
            when('/tours', {
                templateUrl: 'components/audio-tours/toursTemplate.html',
                controller: 'toursController'
            }).
            when('/map', {
                templateUrl: 'components/map/mapTemplate.html',
                controller: 'mapController'
            }).
            when('/area/:name', {
                templateUrl: 'components/area/areaTemplate.html',
                controller: 'areaController'
            }).
            when('/work/:work_id', {
                templateUrl: 'components/audio-work/audioworkTemplate.html',
                controller: 'audioworkController'
            }).
            when('/collections', {
                templateUrl: 'components/collections/collectionsTemplate.html',
                controller: 'collectionsController'
            }).
            when('/tour/:tour_id', {
                templateUrl: 'components/audio-tour/audiotourTemplate.html',
                controller: 'audiotourController'
            }).
            when('/marker', {
                templateUrl: 'components/marker-placer/markerplacerTemplate.html',
                controller: 'markerplacerController'
            }).
            when('/login', {
                templateUrl: 'components/login/loginTemplate.html',
                controller: 'loginController'
            }).
            when('/logout', {
                templateUrl: 'components/logout/logoutTemplate.html',
                controller: 'logoutController'
            }).
            otherwise({
                redirectTo: '/splash'
            });
    }]);

caughtApp.controller('MainController', ['$scope', '$resource', '$rootScope', '$location',
    function ($scope, $resource, $rootScope, $location) {
        $scope.main = {};
        $scope.main.url_prefix = url_prefix;

        $scope.noOneIsLoggedIn = true;
        $scope.main.loginMessage = "Please login!";

        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            if($scope.noOneIsLoggedIn) {
                if(next.templateUrl !== "components/login/loginTemplate.html") {
                    $location.path("/login");
                }
            }
        });

        $scope.$on('OpenSesame', function() {
            $scope.noOneIsLoggedIn = false;
        });

        $scope.$on('CloseSesame', function() {
            $scope.noOneIsLoggedIn = true;
            $scope.main.loginMessage= "Please login!"; 
            $location.path("/login-register");
        });
        

    }]);
