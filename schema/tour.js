"use strict;"
var mongoose = require('mongoose');
var workSchema = new mongoose.Schema({Title: String, Artist: String, Year: String, Medium: String, Size: String, Movement: String, Section: String, Image_URL: String, Sound_URL: String, Map_X: String, Map_Y: String, })
var tourSchema = new mongoose.Schema({Title: String, Image: String, Description: String, works:  [workSchema]})
var Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
