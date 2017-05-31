"use strict";

/*
 * Defined the Mongoose Schema and return a Model for audio tours. 
 */

var mongoose = require('mongoose');

/*
 * Photo can have comments and we stored them in the Photo object itself using
 * this Schema:
 */
var tourSchema = new mongoose.Schema({
	image_file_name: String, 
	title: String,
	subtitle: String,
	runtime: String, 
	sound_file_name: String
});


// the schema is useless so far
// we need to create a model using it
var Tour = mongoose.model('Tour', tourSchema);

// make this available to our photos in our Node applications
module.exports = Tour;
