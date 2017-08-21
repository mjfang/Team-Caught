'use strict';

caughtApp.controller('audiotourController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {
  	$scope.main.title = 'Tours';
  	var tour_id = $routeParams.tour_id
  	var tourModel = $resource("/tour/:tour_id", {});

  	$scope.tour = tourModel.get({tour_id:$routeParams.tour_id}, function () {
  		
  		$scope.audioList = $scope.tour.works;
  		$scope.time = "0:00";
  		console.log($scope.tour)

  		$scope.Markers = new Array();
  		$scope.audioList.forEach(function(tour) {
  			console.log(tour);
  			var marker = new Marker();
		    marker.XPos = parseInt(tour.Map_X);
		    marker.YPos = parseInt(tour.Map_Y);

		    // Push our new marker to our Markers array
		    $scope.Markers.push(marker);
  		})
  		mapSprite.onLoad = function() {
  			draw();
  		}
  		

	    // Move the marker when placed to a better location

  	});


  	$scope.buttonSrc = {
  		playPause : "./icons/ic_play_arrow_black_24px.svg"
  	};


  	$scope.step = function() {
  		var seek = $scope.audio.seek() || 0;
  		$scope.time = $scope.formatTime(Math.round(seek));
  		$scope.$apply( function() {
  			$scope.value = ((seek / $scope.audio.duration()) * 100) || 0;
  		})
  		
  		console.log($scope.value);
  		console.log($scope.audio.playing())
  		if($scope.audio.playing()) {
  			requestAnimationFrame($scope.step);
  		}
  		$scope.time_remaining = $scope.formatTime(Math.round($scope.audio.duration() - seek));
  	}

  	$scope.formatTime = function(secs) {
  		var minutes = Math.floor(secs / 60) || 0;
    	var seconds = (secs - minutes * 60) || 0;
    	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  	}


  	$scope.selectEntry = function(work) {
  		if($scope.audio !== undefined) {
  			$scope.audio.stop();
  		}

  		$scope.audio = new Howl({
			src: [work.Sound_URL], //'sound/loboloco.mp3'
			onplay: function() {
				console.log("play2");
				requestAnimationFrame($scope.step);
			},
			onend: function() {
				$scope.buttonSrc.playPause = "./icons/ic_play_arrow_black_24px.svg";
			}
		});

		$scope.audio.once('load', function() {
			$scope.time_remaining = $scope.formatTime(Math.round($scope.audio.duration() - 0));
			$scope.audio.play();
			$scope.buttonSrc.playPause = "./icons/ic_pause_black_24px.svg";

		});
  	}

  	$scope.playPauseAudio = function(work) {
		if($scope.buttonSrc.playPause === "./icons/ic_play_arrow_black_24px.svg") {
			$scope.buttonSrc.playPause = "./icons/ic_pause_black_24px.svg";

			if($scope.audio === undefined) {
				$scope.selectEntry($scope.tour.works[0]);
			}
			else {
				$scope.audio.play();
			}			
		}
		else {
			$scope.buttonSrc.playPause = "./icons/ic_play_arrow_black_24px.svg";

			$scope.audio.pause();
		}
	};

	var canvas = document.getElementById('Canvas');
	var context = canvas.getContext("2d");
	var mapSprite = new Image();
	mapSprite.src = "images/map/map_floor2.jpg";

	// Run this once so we setup text rendering
	var firstLoad = function () {
	    context.font = "15px Georgia";
	    context.textAlign = "center";
	}

	firstLoad();

	var Marker = function() {
  		this.Sprite = new Image();
  		this.Sprite.src = "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png";
  		this.Width = 12;
  		this.Height = 20;
  		this.XPos = 0;
  		this.YPos = 0;
  	}

	var draw = function () {
	    // Clear Canvas
	    context.fillStyle = "#000";
	    context.fillRect(0, 0, canvas.width, canvas.height);

	    // Draw map
	    // Sprite, X location, Y location, Image width, Image height
	    // You can leave the image height and width off, if you do it will draw the image at default size
	    context.drawImage(mapSprite, 0, 0, 586, 970);

	    // Draw markers
	    for (var i = 0; i < $scope.Markers.length; i++) {
	        var tempMarker = $scope.Markers[i];
	        // Draw marker
	        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);

	        // Calculate position text
	        var markerText = i + 1;

	        // Draw a simple box so you can see the position
	        var textMeasurements = context.measureText(markerText);

	        var radius = 10;
	        context.beginPath();
	        context.arc(tempMarker.XPos, tempMarker.YPos - 5, radius, 0, 2 * Math.PI, false);
	        context.closePath();
	        context.stroke();

	        // Draw position above
	        context.fillStyle = "#000";
	        context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
	    }
	};


  }]);
