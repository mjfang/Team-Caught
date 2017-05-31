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
   // Hard-Edge Painting
   var black_ripe = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/EK-90-Black-Ripe-1955-Wiesbaden.jpg", 
   title : "Black Ripe", artist: "Ellsworth Kelly", year : "1955", medium : "oil on canvas", 
   size: "63 3/16 x 59 3/8 in.", movement: "Hard-Edge Painting", section: "hdpainting"};
   var pound_thirteen = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.MCLAUGHLIN-1988-700x560.jpg", 
   title : "#13", artist: "John McLaughlin", year : "1962", medium : "oil on cotton canvas", 
   size: "48 x 60 in.", movement: "Hard-Edge Painting", section: "hdpainting"};
   var abstract_painting_1966 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.REINHARDT-1974_72dpi.jpg", 
   title : "Abstract Painting, 1966", artist: "Ad Reinhardt", year : "1966", medium : "oil on canvas", 
   size: "60 1/4 x 60 1/4 in.", movement: "Hard-Edge Painting", section: "hdpainting"};
   var htts_diffused = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ALBERS-1972.038-700x712.jpg", 
   title : "Homage to the Square: Diffused", artist: "Josef Albers", year : "1969", medium : "oil on masonite panel", 
   size: "48 x 48 in.", movement: "Hard-Edge Painting", section: "hdpainting"};
   var dumka = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.QUAYTMAN-1987.032-700x697.jpg", 
   title : "Dumka", artist: "Harvey Quaytman", year : "1987", medium : "acrylic and rust on canvas", 
   size: "38 x 38 in.", movement: "Hard-Edge Painting", section: "hdpainting"};
   var inversion_x = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.HELD-1983.014-700x526.jpg", 
   title : "Inversion X", artist: "Al Held", year : "1977", medium : "acrylic on canvas", 
   size: "72 1/4 x 96 1/8 x 4 in.", movement: "Hard-Edge Painting", section: "hdpainting"};
   var hadrians_court_1 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.HELD-1982.082-700x818.jpg", 
   title : "Hadrian's Court I", artist: "Al Held", year : "1982", medium : "acrylic on canvas", 
   size: "84 1/4 x 72 1/4 x 3 5/8 in.", movement: "Hard-Edge Painting", section: "hdpainting"};
   var oboe = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.QUAYTMAN-1987.021-700x703.jpg", 
   title : "Oboe", artist: "Harvey Quaytman", year : "1987", medium : "acrylic on canvas", 
   size: "28 1/8 x 28 1/16 in.", movement: "Hard-Edge Painting", section: "hdpainting"};

   var tours = [hm, ac];

   var works = [irwin_untitled, ap, ft, black_ripe, abstract_painting_1966, pound_thirteen, htts_diffused, dumka, inversion_x, hadrians_court_1, oboe];

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
