'use strict';

var caughtApp = angular.module('caughtApp', ['ngRoute', 'ngMaterial', 'ngResource']);

caughtApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/splash', {
                templateUrl: 'components/splash/splashTemplate.html',
                controller: 'splashController'
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
            otherwise({
                redirectTo: '/splash'
            });
    }]);

caughtApp.controller('MainController', ['$scope', '$resource',
    function ($scope, $resource) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.rightContext = "Users";
        console.log("test");
        var version = $resource('test/info', {});
        $scope.main.version = version.get({});

        $scope.advancedFeatures = false;
        

    }]);
