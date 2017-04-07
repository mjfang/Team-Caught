"use strict";

/*
 * Defined the Mongoose Schema and return a Model for works of art. 
 */

var mongoose = require('mongoose');

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
	genre: String,
	section: String
});

var Work = mongoose.model('Work', workSchema);
module.exports = Work;
