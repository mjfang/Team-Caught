'use strict';

caughtApp.controller('areaController', ['$scope', '$routeParams', '$resource', '$rootScope',
  function ($scope, $routeParams, $resource, $rootScope) {
  	$scope.main.title = $routeParams.name;
  	var worksModel = $resource("/area/:name", {}, {get: {method: 'get', isArray: true}});
  	$scope.workList = worksModel.get({name:$routeParams.name}, function () {
  		console.log($scope.workList)
  		console.log($routeParams.name);
		$scope.time = "0:00";
  		$scope.workList.forEach(function(work) {
  			work.show = false;
  		});


  	});

  	$scope.buttonSrc = {
  		playPause : "./icons/ic_play_arrow_black_24px.svg"
  	};

  	/*
  	  	Audio Player Logic	
  	 */
  	$scope.step = function() {
  		var seek = $scope.audio.seek() || 0;
  		$scope.time = $scope.formatTime(Math.round(seek));
  		$scope.$apply( function() {
  			$scope.value = ((seek / $scope.audio.duration()) * 100) || 0;
  		})
  		
  		console.log($scope.value);
  		// console.log($scope.audio.playing())
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

  	$scope.nowPlaying = null;
  	$scope.selectEntry = function(work) {
  		if(work.Sound_URL === "") {
  			return;
  		}
  		if($scope.audio !== undefined) {
  			$scope.audio.stop();
  			$scope.audio.unload();
  		}
  		if($scope.nowPlaying !== null) {
  			$scope.nowPlaying.show = false;
  			console.log("here");
  		}


  		$scope.audio = new Howl({
			src: [work.Sound_URL],
			onplay: function() {
				console.log("play2");
				requestAnimationFrame($scope.step);
				console.log(work);
				console.log($scope.nowPlaying);
				work.show = true;
				$scope.nowPlaying = work;
			},
			onend: function() {
				$scope.buttonSrc.playPause = "./icons/ic_play_arrow_black_24px.svg";
				work.show = false;
				$scope.nowPlaying = null;
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


	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
		if($scope.audio !== undefined) {
			$scope.audio.stop();
		}
	});

	//Volume logic
	$scope.volume = document.getElementById("volumeSlider");


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

  	$scope.volume.addEventListener('mousemove', $scope.move);
  	$scope.volume.addEventListener('touchmove', $scope.move);

  	$scope.volVal = 50;

  	$scope.setVolume = function(val) {
  		Howler.volume(val);
  	}



  	//Audio progress bar

  	$scope.progress = document.getElementById("progress");


  }]);
