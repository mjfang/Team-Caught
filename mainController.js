'use strict';

var caughtApp = angular.module('caughtApp', ['ngRoute', 'ngMaterial', 'ngResource']);

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
            otherwise({
                redirectTo: '/splash'
            });
    }]);

caughtApp.controller('MainController', ['$scope', '$resource', '$rootScope',
    function ($scope, $resource, $rootScope) {
        $scope.main = {};
        $scope.main.url_prefix = url_prefix;
        $scope.main.title = 'Users';
        $scope.main.rightContext = "Users";
        console.log("test");
        var version = $resource('test/info', {});
        $scope.main.version = version.get({});

        $scope.advancedFeatures = false;
        

    }]);
