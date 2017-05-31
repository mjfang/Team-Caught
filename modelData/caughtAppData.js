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

   // Bay Area Figuration
   var berkeley_26 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DIEBENKORN-1969.013-700x791.jpg", 
   title : "Berkeley #26", artist: "Richard Diebenkorn", year : "1954", medium : "oil on canvas", 
   size: "56 1/4 x 49 1/4 in.", movement: "Bay Area Figuration", section: "bafig"};
   var girl_on_beach = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DIEBENKORN-1969-700x637.jpg", 
   title : "Girl on the Beach", artist: "Richard Diebenkorn", year : "1957", medium : "oil on canvas", 
   size: "52 1/8 x 57 1/4 in.", movement: "Bay Area Figuration", section: "bafig"};
   var reclining_nude = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.OLIVERA-1969-700x564.jpg", 
   title : "Reclining Nude", artist: "Nathan Oliveira", year : "1958", medium : "oil on canvas", 
   size: "48 7/8 x 60 1/8 in.", movement: "Bay Area Figuration", section: "bafig"};
   var four_women = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.PARK-1969-700x527.jpg", 
   title : "Four Women", artist: "David Park", year : "1959", medium : "oil on canvas", 
   size: "57 x 75 3/8 in.", movement: "Bay Area Figuration", section: "bafig"};
   var stage_2_w_bed = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.OLIVEIRA-1969-700x704.jpg", 
   title : "Stage #2 With Bed", artist: "Nathan Oliveira", year : "1967", medium : "oil on canvas", 
   size: "66 x 67 in.", movement: "Bay Area Figuration", section: "bafig"};
   var nude_in_env_i = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.OLIVERA-1969.038-700x815.jpg", 
   title : "Nude in Environment I", artist: "Nathan Oliveira", year : "1962", medium : "oil on canvas", 
   size: "72 1/8 x 62 1/4 in.", movement: "Bay Area Figuration", section: "bafig"};
   var fig_by_window = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.WONNER-1968.052-700x903.jpg", 
   title : "Figure by Window", artist: "Paul Wonner", year : "1962", medium : "oil on canvas", 
   size: "59 3/4 x 46 3/8 in.", movement: "Bay Area Figuration", section: "bafig"};
   var candy_counter = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.THIEBAUD-1969-700x531.jpg", 
   title : "Candy Counter", artist: "Wayne Thiebaud", year : "1962", medium : "oil on canvas", 
   size: "55 1/8 x 72 in.", movement: "Bay Area Figuration", section: "bafig"};
   var wine_glass_and_postcard = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.WONNER-1968.061-700x702.jpg", 
   title : "Wine Glass and Postcard (Zurbaran)", artist: "Paul Wonner", year : "1968", medium : "oil on canvas", 
   size: "48 x 48 in.", movement: "Bay Area Figuration", section: "bafig"};
   var ocean_park_60 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DIEBENKORN-1974-700x800.jpg", 
   title : "Ocean Park #60", artist: "Richard Diebenkorn", year : "1973", medium : "oil on canvas", 
   size: "93 x 81 1/4 in.", movement: "Bay Area Figuration", section: "bafig"};
   var untitled_standing = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.NERI-1982-e1402685027672-700x728.jpg", 
   title : "Untitled Standing Figure", artist: "Manuel Neri", year : "1982", medium : "pigment on plaster", 
   size: "69 1/4 x 17 7/8 x 19 1/2 in.", movement: "Bay Area Figuration", section: "bafig"};
   
   // Color-Field Painting
   var ap = {sounds : [sound3], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.FRANKENTHALER-1996.001_72dpi.jpg", title: "Approach", artist: "Helen Frankenthaler", year : "1962", medium: "oil", movement: "Color Field Painting", section: "cfpainting"};
   var pendulum = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.LOUIS-19725-700x529.jpg", 
   title : "Pendulum", artist: "Morris Louis", year : "1954", medium : "acrylic resin on canvas", 
   size: "79 3/8 x 105 3/8 in.", movement: "Color Field Painting", section: "cfpainting"};
   var number_64 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.LOUIS-1973-700x435.jpg", 
   title : "Number 64", artist: "Morris Louis", year : "1958", medium : "acrylic on canvas", 
   size: "92 x 148 1/8 in.", movement: "Color Field Painting", section: "cfpainting"};
   var rose = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.NOLAND-1972-700x696.jpg", 
   title : "Rose", artist: "Kenneth Noland", year : "1961", medium : "acrylic on canvas", 
   size: "81 1/2 x 81 1/2", movement: "Color Field Painting", section: "cfpainting"};
   var burn_and_glit = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.OLITSKI-1972-700x925.jpg", 
   title : "Burn and Glitter", artist: "Jules Olitski", year : "1966", medium : "acrylic on canvas", 
   size: "116 x 87 in.", movement: "Color Field Painting", section: "cfpainting"};
   var lebron = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.NOLAND-1971-700x702.jpg", 
   title : "Lebron", artist: "Kenneth Noland", year : "1962", medium : "acrylic on canvas", 
   size: "69 5/8 x 69 5/8 x 1 1/4 in.", movement: "Color Field Painting", section: "cfpainting"};
   var number_15 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.POONS-1973-700x871.jpg", 
   title : "#15", artist: "Larry Poons", year : "1972", medium : "acrylic on canvas", 
   size: "115 x 93 in.", movement: "Color Field Painting", section: "cfpainting"};
   var invocation = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.OLITSKI-1986-700x413.jpg", 
   title : "Invocation", artist: "Jules Olitski", year : "1985", medium : "acrylic on canvas", 
   size: "75 x 28 in.", movement: "Color Field Painting", section: "cfpainting"};


   var irwin_untitled = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.IRWIN-1985_72dpi.jpg", 
   title : "Untitled", artist: "Robert Irwin", year : "1969", medium : "acrylic lacquer on cast acrylic", 
   size: "53 x 24 1/2 in.", movement: "California Light and Space", section: "contemp"};
   // Template
   // {sounds : [sound1], image_file_name: "", 
   // title : "", artist: "", year : "", medium : "", 
   // size: "", movement: "", section: ""};

   // Funk
   var marina_2 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.WESTERMANN-1987-e1401836930312-700x702.jpg", 
   title : "Marina 2", artist: "H. C. Westermann", year : "1960", medium : "wood and metal", 
   size: "41 1/2 x 21 x 13 1/2 in.", movement: "Funk", section: "funk"};
   var sinking_bp = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ARNESON-1971.00601_1971-700x869.jpg", 
   title : "Sinking Brick Plates", artist: "Robert Arneson", year : "1969", medium : "glazed ceramic", 
   size: "Five plates: 3 x 19, 3 1/4 x 19, 4 1/4 x 18 7/8, 2 1/2 x 18 3/4, and 1 5/8 x 18 5/8 in. diameter", movement: "Funk", section: "funk"};
   var half_a_dam = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ALLAN-1971_022-700x413.jpg", 
   title : "Half a Dam", artist: "William Allan", year : "1971", medium : "acrylic on canvas", 
   size: "79 x 133 1/2 in.", movement: "Funk", section: "funk"};
   var hb_in_tropics = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DEFOREST-1974-700x549.jpg", 
   title : "Hans Bricker In The Tropics", artist: "Roy De Forest", year : "1974", medium : "polymer on canvas", 
   size: "72 x 93 in.", movement: "Funk", section: "funk"};
   var plumb_bob = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.HUDSON-1983-e1402681660230-700x665.jpg", 
   title : "Plumb Bob", artist: "Robert Hudson", year : "1982", medium : "enamel on steel, antlers, mirror", 
   size: "102 1/2 x 82 1/2 x 72 1/4 in.", movement: "Funk", section: "funk"};
   var canton_lady = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.SHAW-1984-e1402687317994-700x622.jpg", 
   title : "Canton Lady", artist: "Richard Shaw", year : "1984", medium : "glaze on porcelain with decals", 
   size: "35 1/8 x 16 1/2 x 8 in.", movement: "Funk", section: "funk"};
   var homage_to_philip = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ARNESON-1982-e1402520531337-700x728.jpg", 
   title : "Homage to Philip Guston", artist: "Robert Arneson", year : "1981", medium : "glaze on ceramic", 
   size: "18 3/8 x 17 x 14 3/8 in.", movement: "Funk", section: "funk"};
   var hoarding_my_ff = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.GILOOLY-1982-700x827.jpg", 
   title : "Hoarding My Frog Food", artist: "David Gilhooly", year : "1982", medium : "glaze on ceramic", 
   size: "41 1/2 x 25 x 18 3/4 in.", movement: "Funk", section: "funk"};
   var just_to_mention = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.WILEY-1999-700x635.jpg", 
   title : "Just to Mention a Few (after Bosch)", artist: "William T. Wiley", year : "1994", medium : "acrylic, charcoal, and graphite on canvas", 
   size: "72 1/2 x 81 in.", movement: "Funk", section: "funk"};

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

   // Post-Minimalism
   var plum = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.BENGLIS-1972-e1402521032833-700x633.jpg", 
   title : "Plum", artist: "Lynda Benglis", year : "1971", medium : "purified pigmented beeswax, damar resin on masonite and wood", 
   size: "36 x 5 1/8 x 2 3/4 in.", movement: "Post-Minimalism", section: "postmin"};
   var untitled_21 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.MARTIN-1992_72dpi.jpg", 
   title : "Untitled #21", artist: "Agnes Martin", year : "1980", medium : "acrylic, gesso & graphite on canvas", 
   size: "72x 72 in.", movement: "Post-Minimalism", section: "postmin"};
   var no_tit_chapel = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.THERRIEN-1985.034-700x862.jpg", 
   title : "No title (chapel)", artist: "Robert Therrien", year : "1985", medium : "oil and wax on wood", 
   size: "52 x 16 x 4 1/2 in.", movement: "Post-Minimalism", section: "postmin"};
   var no_tit_arch = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.THERRIEN-1985.040-700x849.jpg", 
   title : "No title (arch)", artist: "Robert Therrien", year : "1985", medium : "oil and wax on wood", 
   size: "60 x 17 x 4 1/4 in.", movement: "Post-Minimalism", section: "postmin"};
   var no_tit_flag_bronze = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.THERRIEN-2010.013-700x855.jpg", 
   title : "No title (flagpole)", artist: "Robert Therrien", year : "1985", medium : "bronze", 
   size: "76 x 13 diameter in.", movement: "Post-Minimalism", section: "postmin"};
   var no_tit_flag_oil = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.THERRIEN-1985.030-700x1049.jpg", 
   title : "No title (flagpole)", artist: "Robert Therrien", year : "1985", medium : "oil on board", 
   size: "60 1/8 x 40 1/8 in.", movement: "Post-Minimalism", section: "postmin"};
   var no_tit_hangman = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.THERRIEN-1989.018-700x875.jpg", 
   title : "No title (hangman)", artist: "Robert Therrien", year : "1988", medium : "enamel on aluminum and brass", 
   size: "90 x 72 x 12 in.", movement: "Post-Minimalism", section: "postmin"};
   var steel_chairs = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.BURTON-1989-e1402521305555-700x472.jpg", 
   title : "Pair of Steel Chairs", artist: "Scott Burton", year : "1987-1989", medium : "stainless steel", 
   size: "Two chairs: 32 3/4 x 21 3/4 x 31 l/2 in. each", movement: "Post-Minimalism", section: "postmin"};

   var tours = [hm, ac];

   var works = [irwin_untitled, ap, ft, black_ripe, abstract_painting_1966, pound_thirteen, htts_diffused, dumka, inversion_x, hadrians_court_1, oboe,
   pendulum, number_64, rose, burn_and_glit, lebron, number_15, invocation, plum, untitled_21, no_tit_chapel, no_tit_arch,
   no_tit_flag_bronze, no_tit_flag_oil, no_tit_hangman, steel_chairs, marina_2, sinking_bp, half_a_dam, hb_in_tropics, plumb_bob, canton_lady, homage_to_philip,
   hoarding_my_ff, just_to_mention, berkeley_26, girl_on_beach, reclining_nude, four_women, stage_2_w_bed, nude_in_env_i, fig_by_window, candy_counter,
   wine_glass_and_postcard, ocean_park_60, untitled_standing];

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
