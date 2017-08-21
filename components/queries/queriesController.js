'use strict';

caughtApp.controller('queriesController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {
  	$scope.main.title = $routeParams.name;
  	var worksModel = $resource("/works", {}, {get: {method: 'get', isArray: true}});
  	$scope.workList = worksModel.get({}, function () {
  		console.log($scope.workList)
  	});



  	// for photoupload button ---
  	var selectedPhotoFile;   // Holds the last file selected by the user

    // Called on file selection - we simply save a reference to the file in selectedPhotoFile
    $scope.inputFileNameChanged = function (element) {
        selectedPhotoFile = element.files[0];
        $scope.uploadPhoto();
    };

    // Has the user selected a file?
    $scope.inputFileNameSelected = function () {
        return !!selectedPhotoFile;
    };

    // Upload the photo file selected by the user using a post request to the URL /photos/new
    $scope.uploadPhoto = function () {
        if (!$scope.inputFileNameSelected()) {
            console.error("uploadPhoto called will no selected file");
            return;
        }
        console.log('fileSubmitted', selectedPhotoFile);

        // Create a DOM form and add the file to it under the name uploadedphoto
        var domForm = new FormData();
        domForm.append('uploadedphoto', selectedPhotoFile);

        // Using $http to POST the form
        $http.post('/photos/new', domForm, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(newPhoto){
            console.log("success upliadubg");
            $rootScope.$broadcast('PhotoLoaded');
            // The photo was successfully uploaded. XXX - Do whatever you want on success.
        }).error(function(err){
            // Couldn't upload the photo. XXX  - Do whatever you want on failure.
            console.error('ERROR uploading photo', err);
        });

    };

  }]);
