"use strict;"
var mongoose = require('mongoose');
var workSchema = new mongoose.Schema({ID: String,Title: String,Content: String,Date: String,Post_Type: String,Permalink: String,URL: String,Title_1_: String,URL_1_: String,Medium: String,Decade: String,Movement: String,Artist: String,Gallery_Location: String,Year_of_Anderson_Accession: String,Slug: String,Ping_Status: String,Post_Modified_Date: String,Work_Year: String,Work_Dimensions: String,Work_Medium_Detailed: String,Stanford_Accession_Number: String,Anderson_Accession_Number: String,Acquired_from_Gallery_Person: String,Work_Marks: String,Gift_Acquisition_Notes: String,Featured_Work: String,Work_Image: String,Copyright_Caption: String,Image_Copyright_Options: String,Sound_URL: String,})
var Work = mongoose.model('Work', workSchema);
module.exports = Work;
