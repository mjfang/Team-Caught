"use strict";

/*
 * Defined the Mongoose Schema and return a Model for works of art. 
 */

var mongoose = require('mongoose');

var soundSchema = new mongoose.Schema({
	sound_file_name: String,
	title: String,
	speaker: String,
	time: String
})



/*
 * Photo can have comments and we stored them in the Photo object itself using
 * this Schema:
 */
var workSchema = new mongoose.Schema({
	image_file_name: String, 
	title: String,
	artist: String,
	year: String,
	medium: String,
	size: String,
	movement: String,
	section: String,
	sounds: [soundSchema]
});

var Work = mongoose.model('Work', workSchema);
module.exports = Work;
