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

// Artwork Template
   // {sounds : [sound1], image_file_name: "", 
   // title : "", artist: "", year : "", medium : "", 
   // size: "", movement: "", section: ""};
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
   var wine_glass_and_postcard = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.WONNER-1968.061-700x702.jpg", 
   title : "Wine Glass and Postcard (Zurbaran)", artist: "Paul Wonner", year : "1968", medium : "oil on canvas", 
   size: "48 x 48 in.", movement: "Bay Area Figuration", section: "bafig"};
   var ocean_park_60 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DIEBENKORN-1974-700x800.jpg", 
   title : "Ocean Park #60", artist: "Richard Diebenkorn", year : "1973", medium : "oil on canvas", 
   size: "93 x 81 1/4 in.", movement: "Bay Area Figuration", section: "bafig"};
   var untitled_standing = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.NERI-1982-e1402685027672-700x728.jpg", 
   title : "Untitled Standing Figure", artist: "Manuel Neri", year : "1982", medium : "pigment on plaster", 
   size: "69 1/4 x 17 7/8 x 19 1/2 in.", movement: "Bay Area Figuration", section: "bafig"};

   // California Light and Space Higher
   var irwin_untitled = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.IRWIN-1985_72dpi.jpg", 
   title : "Untitled", artist: "Robert Irwin", year : "1969", medium : "acrylic lacquer on cast acrylic", 
   size: "53 x 24 1/2 in.", movement: "California Light and Space", section: "clshigher"};
   var lux_lov = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.BENGSTON-1971-700x703.jpg", 
   title : "Lux Lovely", artist: "Billy Al Bengston", year : "1962", medium : "nitrocellulose lacquer and oil on masonite", 
   size: "72 1/4 x 72 1/4 in.", movement: "California Light and Space", section: "clshigher"};
   var pa_untitled = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ALEXANDER-1971.102-700x828.jpg", 
   title : "Untitled", artist: "Peter Alexander", year : "1971", medium : "polyester resin", 
   size: "88 3/4 x 5 1/8 x 5 1/4 in.", movement: "California Light and Space", section: "clshigher"};
   var spoke = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DAVIS-1971-e1402614915104-700x425.jpg", 
   title : "Spoke", artist: "Ronald Davis", year : "1968", medium : "polyester resin and fiberglass", 
   size: "56 3/4 x 135 3/4 x 2 1/4 in.", movement: "California Light and Space", section: "clshigher"};
   var most_of_iceberg= {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.RICHARDSON-1969-e1401837044403-700x539.jpg", 
   title : "Most of that Iceberg is Below the Water", artist: "Sam Richardson", year : "1969", medium : "plywood, polyurethane foam, polyester resin, fiberglass, polyester filler, and lacquers", 
   size: "10 x 14 x 14 in.", movement: "California Light and Space", section: "clshigher"};
   var homage_boccioni= {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.PARIS-1969.101-e1402685959567-220x246.jpg", 
   title : "Homage to Boccioni #1", artist: "Harold Paris", year : "1969", medium : "vacuum-formed butyrate", 
   size: "54 x 23 x 19 1/2 in.", movement: "California Light and Space", section: "clshigher"};
   var oakland_maquette= {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.BENTON-1969-700x527.jpg", 
   title : "Oakland Maquette", artist: "Fletcher Benton", year : "1969", medium : "silicone, bronze, acrylic, wood, lamp, and motor", 
   size: "17 1/2 x 22 7/8 x 4 7/8 in.", movement: "California Light and Space", section: "clshigher"};
   var mccracken_untit= {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.MCCRACKEN-1972-e1402684385770-220x163.jpg", 
   title : "Untitled", artist: "John McCracken", year : "1969", medium : "wood, fiberglass, and laquer", 
   size: "10 x 10 x 8 3/8 in.", movement: "California Light and Space", section: "clshigher"};

   // California Light and Space Lower
   var pound_thirteen = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.MCLAUGHLIN-1988-700x560.jpg", 
   title : "#13", artist: "John McLaughlin", year : "1962", medium : "oil on cotton canvas", 
   size: "48 x 60 in.", movement: "Hard-Edge Painting", section: "clslower"};
   var spear_form = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.MASON-2007-e1402684305576-700x651.jpg", 
   title : "Spear Form, Ember", artist: "John Mason", year : "2002", medium : "ceramic", 
   size: "64 x 26 3/4 x 26 3/4 in.", movement: "California Light and Space", section: "clslower"};
   var quin_roo = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.SCULLY-1988.034-700x1388.jpg", 
   title : "Quintana Roo", artist: "Sean Scully", year : "1980", medium : "oil on canvas", 
   size: "84 x 42 1/4 in.", movement: "California Light and Space", section: "clslower"};
   var ljd_untit = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DILL-1983-700x1410.jpg", 
   title : "Untitled", artist: "Laddie John Dill", year : "1982", medium : "cement, glass, pigment, silicone on wood", 
   size: "119 7/8 x 59 3/4 x 2 7/8 in.", movement: "California Light and Space", section: "clslower"};
   var erdnase = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DELAP-1985-700x916.jpg", 
   title : "Erdnase", artist: "Tony DeLap", year : "1985", medium : "acrylic on canvas with wood", 
   size: "79 x 82 x 3 3/4 in.", movement: "California Light and Space", section: "clslower"};
   var hegemann = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.MOSES-1985-700x604.jpg", 
   title : "Ill. Hegemann 30", artist: "Ed Moses", year : "1972", medium : "pigment and resin on canvas", 
   size: "89 1/4 x 103 5/8 in.", movement: "California Light and Space", section: "clslower"};
   var glass_cube = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.BELL-1987-e1402520892307-700x628.jpg", 
   title : "Glass Cube", artist: "Larry Bell", year : "1984", medium : "metal film on glass and chrome-plated steel", 
   size: "36 x 36 x 36 in.", movement: "California Light and Space", section: "clslower"};
   
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

   // New York School
   var italian_summer = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.MOTHERWELL-1969-700x907.jpg", 
   title : "Italian Summer", artist: "Robert Motherwell", year : "1963", medium : "oil on canvas on hexel panel", 
   size: "90 x 70 in.", movement: "New York School", section: "nyschool"};
   var timeless_clock = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.SMITH-1971_72dpi-700x868.jpg", 
   title : "Timeless Clock", artist: "David Smith", year : "1957", medium : "silver", 
   size: "20 3/8 x 26 x 6 1/2 in.", movement: "New York School", section: "nyschool"};
   var black_on_gray = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ROTHKO-1971_72dpi.jpg", 
   title : "Untitled (Black on Gray)", artist: "Mark Rothko", year : "1969", medium : "acrylic on canvas", 
   size: "93 x 76 1/8 in.", movement: "New York School", section: "nyschool"};
   var pink_white_red = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.ROTHKO-1972_72dpi.jpg", 
   title : "Pink and White over Red", artist: "Mark Rothko", year : "1957", medium : "oil on canvas", 
   size: "105 x 116 in.", movement: "New York School", section: "nyschool"};
   var lucifer = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.POLLOCK-1970.006-700x276.jpg", 
   title : "Lucifer", artist: "Jackson Pollock", year : "1947", medium : "oil and enamel on canvas", 
   size: "41 3/16 X 105 1/2 in.", movement: "New York School", section: "nyschool"};
   var transfig_iii = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.GOTTLIEB-1972.023-700x1044.jpg", 
   title : "Transfiguration III", artist: "Adolph Gottlieb", year : "1958", medium : "oil on canvas", 
   size: "90 x 60 1/8 in.", movement: "New York School", section: "nyschool"};
   var figure_8 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.KLINE-1972-700x888.jpg", 
   title : "Figure 8", artist: "Franz Kline", year : "1952", medium : "oil on canvas", 
   size: "80 7/8 x 63 3/8 in.", movement: "New York School", section: "nyschool"};

   // New York School Lower
   var j_1957 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.STILL-1972-700x543.jpg", 
   title : "1957-J No. 1 (PH-142)", artist: "Clyfford Still", year : "1957", medium : "oil on canvas", 
   size: "113 3/8 x 146 7/8 in.", movement: "New York School", section: "nyschoollower"};
   var jan_1971 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.LOBDELL-1983.028-700x889.jpg", 
   title : "January 1971", artist: "Frank Lobdell", year : "1971", medium : "oil on canvas", 
   size: "84 x 66 1/4 in.", movement: "New York School", section: "nyschoollower"};
   var fall_1971 = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.LOBDELL-1983-700x890.jpg", 
   title : "Fall 1971", artist: "Frank Lobdell", year : "1971", medium : "oil on canvas", 
   size: "84 x 66 1/8 in.", movement: "New York School", section: "nyschoollower"};
   var votto = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.HOLLAND-1980-700x858.jpg", 
   title : "Votto", artist: "Tom Holland", year : "1979", medium : "epoxy on aluminum", 
   size: "111 3/4 x 66 x 34 3/4 in.", movement: "New York School", section: "nyschoollower"};
   var before_again = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/08/4059.MITCHELL-1986.009-700x934.jpg", 
   title : "Before, Again IV", artist: "Joan Mitchell", year : "1985", medium : "oil on canvas", 
   size: "110 x 78 3/4 in.", movement: "New York School", section: "nyschoollower"};
   var untit_v = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.DEKOONING-1987-700x614.jpg", 
   title : "Untitled V", artist: "Willem de Kooning", year : "1986", medium : "oil on canvas", 
   size: "77 x 88 in.", movement: "New York School", section: "nyschoollower"};
   var sky_garden = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.NEVELSON-1981.003_72dpi.jpg", 
   title : "Sky Garden", artist: "Louise Nevelson", year : "1959-1964", medium : "enamel on wood", 
   size: "99 5/8 x 61 x 17 1/2 in.", movement: "New York School", section: "nyschoollower"};
   var untit_stack = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.VOULKOS-1982-e1402678028665-700x665.jpg", 
   title : "Untitled Stack", artist: "Peter Voulkos", year : "1981", medium : "wood-fired stoneware", 
   size: "35 1/8 x 16 3/8 diameter in.", movement: "New York School", section: "nyschoollower"};
   var killyboffin = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.BEASLEY-1969-e1401838117242-700x535.jpg", 
   title : "Killyboffin", artist: "Bruce Beasley", year : "1968", medium : "cast acrylic", 
   size: "28 x 45 x 13 1/4 in.", movement: "New York School", section: "nyschoollower"};
   var candy_counter = {sounds : [sound1], image_file_name: "https://anderson.stanford.edu/wp-content/uploads/2014/05/4059.THIEBAUD-1969-700x531.jpg", 
   title : "Candy Counter", artist: "Wayne Thiebaud", year : "1962", medium : "oil on canvas", 
   size: "55 1/8 x 72 in.", movement: "Bay Area Figuration", section: "bafig"};

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
   wine_glass_and_postcard, ocean_park_60, untitled_standing, lux_lov, pa_untitled, spoke, most_of_iceberg, homage_boccioni, oakland_maquette, mccracken_untit,
   spear_form, quin_roo, ljd_untit, erdnase, hegemann, glass_cube, j_1957, jan_1971, fall_1971, votto, before_again, untit_v,sky_garden, untit_stack, killyboffin];

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
