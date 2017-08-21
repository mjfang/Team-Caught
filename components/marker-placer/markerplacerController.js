'use strict';

caughtApp.controller('markerplacerController', ['$scope', '$routeParams', '$resource',
  function ($scope, $routeParams, $resource) {

  		var canvas = document.getElementById('Canvas');
  		var context = canvas.getContext("2d");
  		var mapSprite = new Image();
  		mapSprite.src = "images/map/map_floor2.jpg"
  		mapSprite.onload = function() {
  			draw();
  		}
	  	var Marker = function() {
	  		this.Sprite = new Image();
	  		this.Sprite.src = "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png"
	  		this.Width = 12;
	  		this.Height = 20;
	  		this.XPos = 0;
	  		this.YPos = 0;
	  	}

	  	var Markers = new Array();

	  	var mouseClicked = function (mouse) {
		    // Get corrent mouse coords
		    var rect = canvas.getBoundingClientRect();
		    var mouseXPos = (mouse.x - rect.left);
		    var mouseYPos = (mouse.y - rect.top);

		    // Move the marker when placed to a better location
		    var marker = new Marker();
		    marker.XPos = mouseXPos - (marker.Width / 2);
		    marker.YPos = mouseYPos - marker.Height;

		    // Push our new marker to our Markers array
		    Markers.push(marker);
	  	}


		// Add mouse click event listener to canvas
		canvas.addEventListener("mousedown", mouseClicked, false);

		// Run this once so we setup text rendering
		var firstLoad = function () {
		    context.font = "15px Georgia";
		    context.textAlign = "center";
		}

		firstLoad();

		// This will be called 60 times a second, look at the code at the bottom `setInterval`
		// var main = function () {
		//     // Update our canvas
		    
		// };

		var draw = function () {
		    // Clear Canvas
		    context.fillStyle = "#000";
		    context.fillRect(0, 0, canvas.width, canvas.height);

		    // Draw map
		    // Sprite, X location, Y location, Image width, Image height
		    // You can leave the image height and width off, if you do it will draw the image at default size
		    context.drawImage(mapSprite, 0, 0, 586, 970);

		    // Draw markers
		    for (var i = 0; i < Markers.length; i++) {
		        var tempMarker = Markers[i];
		        // Draw marker
		        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);

		        // Calculate position text
		        var markerText = "Postion (X:" + tempMarker.XPos + ", Y:" + tempMarker.YPos;

		        // Draw a simple box so you can see the position
		        var textMeasurements = context.measureText(markerText);
		        context.fillStyle = "#666";
		        context.globalAlpha = 0.7;
		        context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
		        context.globalAlpha = 1;

		        // Draw position above
		        context.fillStyle = "#000";
		        context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
		    }
		};

		setInterval(main, (1000 / 60)); // Refresh 60 times a second


		var tourList = $resource("/tours", {}, {get: {method: 'get', isArray: true}});
  		$scope.tourList = tourList.get({}, function () {
  			console.log($scope.tourList);
  		});

  		window.onLoad = function() {
  			imageMapResize();
  			console.log("imageMapResize");
  		}
  		
  }]);
