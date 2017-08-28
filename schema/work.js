"use strict;"
var mongoose = require('mongoose');
var workSchema = new mongoose.Schema({Title: String,Artist: String,Year: String,Medium: String,Size: String,Movement: String,Section: String,Image_URL: String,Sound_URL: String,})
var Work = mongoose.model('Work', workSchema);
module.exports = Work;
