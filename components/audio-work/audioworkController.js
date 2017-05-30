'use strict';

caughtApp.controller('audioworkController', ['$scope', '$routeParams', '$resource', '$rootScope',
  function ($scope, $routeParams, $resource, $rootScope) {
  	$scope.main.title = '';
  	var work_id = $routeParams.work_id;
  	var tourModel = $resource("/work/:work_id", {});
  	$scope.volume = document.getElementById("volumeSlider");
  	$scope.work = tourModel.get({work_id:$routeParams.work_id}, function () {
  		
  	});

  	$scope.time = "0:00";
	$scope.audio = new Howl({
		src: ['sound/loboloco.mp3'],
		onplay: function() {
			requestAnimationFrame($scope.step);
		},
		onend: function() {
			$scope.buttonSrc.playPause = "./icons/ic_play_arrow_black_24px.svg";
		}
	});


  	$scope.playPauseAudio = function(file_name) {
  		if($scope.buttonSrc.playPause === "./icons/ic_play_arrow_black_24px.svg") {
  			if($scope.audio === undefined){

		  	}
		  	console.log($scope.audio.volume());

	  		$scope.audio.play();
	  		window.sliderDown = true;
  			$scope.setVolume(.5);
  			window.sliderDown = false;
  			
	  		$scope.buttonSrc.playPause = "./icons/ic_pause_black_24px.svg";
	  	}
	  	else {
	  		$scope.audio.pause();
  			$scope.buttonSrc.playPause = "./icons/ic_play_arrow_black_24px.svg";
	  	}
  	};

  	$scope.buttonSrc = {
  		playPause : "./icons/ic_play_arrow_black_24px.svg"
  	};

  	$scope.seek = function(per) {
  		$scope.audio.seek($scope.audio.duration() * per);
  	}



  	$scope.setVolume = function(val) {
  		Howler.volume(val);
  	}
	window.onbeforeunload = function(){
		if($scope.audio !== undefined) {
			$scope.audio.stop();
		}
	};

  	$scope.volVal = 50;

  	$scope.move = function(event) {
  		if(window.sliderDown) {
  			var x = event.clientX || event.touches[0].clientX;
  			var startX = window.innerWidth * 0.05;
    		var layerX = x - startX;
    		var per = Math.min(1, Math.max(0, layerX / parseFloat(volumeSlider.scrollWidth)));
    		$scope.setVolume(per);
    		console.log(per);
  		}
  	}

	$scope.audio.once('load', function() {
		$scope.time_remaining = $scope.formatTime(Math.round($scope.audio.duration() - 0));

	})
  	$scope.progress = document.getElementById("progress");
  	$scope.progress.addEventListener('click', function(event) {
  		$scope.seek(event.clientX / window.innerWidth);
  	}) // need to make more precise ...


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
  	
  	$scope.volume.addEventListener('mousedown', function() {
  		window.sliderDown = true;
  	});
  	$scope.volume.addEventListener('touchstart', function() {
  		window.sliderDown = true;
  	});
  	$scope.volume.addEventListener('mouseup', function() {
  		window.sliderDown = false;
	});
	$scope.volume.addEventListener('touchend', function() {
	  window.sliderDown = false;
	});

	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
		if($scope.audio !== undefined) {
			$scope.audio.stop();
		}
	});

  	$scope.volume.addEventListener('mousemove', $scope.move);
  	$scope.volume.addEventListener('touchmove', $scope.move);


  }]);
