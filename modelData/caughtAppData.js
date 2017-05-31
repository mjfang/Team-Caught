"use strict";
/* jshint node: true */
/*
 * Model data for CS142 Project #5 - the photo sharing site.
 * This module returns an object called cs142Models with the following functions:
 *
 * cs142Models.userListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * cs142Models.userModel - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * cs142Models.photoOfUserModel - A function that returns the photos belong to
 * the specified user. Called  with an user ID (id), the function returns an object containing:
 *   _id  (string) - The ID of the photo
 *   date_time (date) - he date and time the picture was taken in ISO format.
 *   file_name (string) - The file name in the image directory of the picture.
 *   user_id (string) - The user id of the picture's owner.
 *   comments: {array of objects} - An array of comment objects containing the properties:
 *        _id  (string) - The ID of the comment.
 *        date_time (date) - The date the comment was made in ISO format.
 *        comment (string) - The text of the comment.
 *        user: {object} The user info (see userMode for format) who made the comment
 *        photo_id: (string) - The ID of the photo the comment belongs to.
 *
 * cs142Models.schemaModel - A function that returns the test info from the fake schema.
 *                           The function returns an object containing:
 *   _id (string) - The ID of the schema
 *   __v (number) - The version number
 *   load_date_time (date) - The date the schema was made in ISO format.
 *
 * 
 */
(function() {

// var tourPreviewSchema = new mongoose.Schema({
//    image_file_name: String, 
//    title: String,
//    subtitle: String,
//    runtime: String
// });

// var workSchema = new mongoose.Schema({
//    image_file_name: String, 
//    title: String,
//    artist: String,
//    year: String,
//    medium: String,
//    size: String
// });

//    sound_file_name: String,
   // title: String,
   // speaker: String,
   // time: String


   var sound1 = {sound_file_name : "sound/loboloco.mp3", title: "Music1", speaker: "Lobo Loco", time: "2:00"};
   var sound2 = {sound_file_name : "sound/jdeleon recording.mp3", title: "Student Reflection", speaker: "Joshua De Leon (narrated by Eric Wang)", time: "1:04"}
   var sound3 = {sound_file_name : "sound/kwadden recording.mp3", title: "Student Reflection", speaker: "Kari Wadden (narrated by Marianne Dang)", time: "1:24"}
   var hm = {image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ROTHKO-1972_72dpi.jpg", title: "Hmm...Art?", subtitle: "A fun and entertaining podcast on interpreting modern art.", runtime: "43 min", sound_file_name: "sound/loboloco.mp3"};
   var ac = {image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DAVIS-1971-e1402614915104-700x425.jpg", title: "Artists of California", subtitle: "Highlights of the Anderson's collection of Californian artists' works.", runtime: "5 min", sound_file_name: "sound/loboloco.mp3"};
   var ft = {sounds : [sound2], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.CARNWATH-2003-700x701.jpg", title: "Full Time",
   artist: "Squeak Carnwath", year : "2003", medium : "oil", movement: "Contemporary", section: "contemp"};
   var ap = {sounds : [sound3], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.FRANKENTHALER-1996.001_72dpi.jpg", title: "Approach", artist: "Helen Frankenthaler", year : "1962", medium: "oil", movement: "Color Field Painting", section: "cfpainting"};
   var irwin_untitled = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.IRWIN-1985_72dpi.jpg", 
   title : "Untitled", artist: "Robert Irwin", year : "1969", medium : "acrylic lacquer on cast acrylic", 
   size: "53 x 24 1/2 in.", movement: "California Light and Space", section: "contemp"};


   var tours = [hm, ac];

   var works = [irwin_untitled, ap, ft];

   var toursModel = function() {
      return tours;
   };

   var worksModel = function() {
      return works;
   }

   var caughtModels = {
      toursModel: toursModel,
      worksModel: worksModel
   };

   // Create fake test Schema
   // var schemaInfo = {
   //    load_date_time: "Fri Apr 29 2016 01:45:15 GMT-0700 (PDT)",
   //    __v: 0,
   //    _id: "57231f1b30e4351f4e9f4bf6"
   // };


   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.caughtModels = caughtModels;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.caughtModels = caughtModels;
   }
})();
