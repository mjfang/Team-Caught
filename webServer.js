"use strict";

/* jshint node: true */

/*
 * This builds on the webServer of previous projects in that it exports the current
 * directory via webserver listing on a hard code (see portno below) port. It also
 * establishes a connection to the MongoDB named 'cs142project6'.
 *
 * To start the webserver run the command:
 *    node webServer.js
 *
 * Note that anyone able to connect to localhost:portNo will be able to fetch any file accessible
 * to the current user in the current directory or any of its children.
 *
 * This webServer exports the following URLs:
 * /              -  Returns a text status message.  Good for testing web server running.
 * /test          - (Same as /test/info)
 * /test/info     -  Returns the SchemaInfo object from the database (JSON format).  Good
 *                   for testing database connectivity.
 * /test/counts   -  Returns the population counts of the cs142 collections in the database.
 *                   Format is a JSON object with properties being the collection name and
 *                   the values being the counts.
 *
 * The following URLs need to be changed to fetch there reply values from the database.
 * /user/list     -  Returns an array containing all the User objects from the database.
 *                   (JSON format)
 * /user/:id      -  Returns the User object with the _id of id. (JSON format).
 * /photosOfUser/:id' - Returns an array with all the photos of the User (id). Each photo
 *                      should have all the Comments on the Photo (JSON format)
 *
 */

var mongoose = require('mongoose');
var async = require('async');


// Load the Mongoose schema fr User, Photo, and SchemaInfo
var User = require('./schema/user.js');
var Photo = require('./schema/photo.js');
var SchemaInfo = require('./schema/schemaInfo.js');
var compression = require('compression');
var Tour = require('./schema/tour.js');
var Work = require('./schema/work.js');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
app.use(compression());
app.use(session({secret: 'secretKey', resave: false, saveUninitialized: false}));
app.use(bodyParser.json());
// XXX - Your submission should work without this line
// var cs142models = require('./modelData/photoApp.js').cs142models;


mongoose.connect('mongodb://m1:m12345@ds155651.mlab.com:55651/teamcaught');

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));


app.get('/', function (request, response) {
    response.send('Simple web server of files from ' + __dirname);
});

app.get('/tours', function(request, response) {
    Tour.find({}, function(err, tourList) {
        if(err) {
            console.error('Error retrieving audio tour list');
            reponse.status(400).send(JSON.stringify(err));
            return;
        }
        response.status(200).send(tourList);
    });
})

app.get('/tour/:tour_id', function(request, response) {
    var tour_id = request.params.tour_id;
    Tour.findOne({_id : tour_id}, function(err, tour) {
        if(err) {
            console.error('Error retrieving tour');
            response.status(400).send(JSON.stringify(err));
            return;
        }
        response.status(200).send(tour);
    });
})

app.get('/work/:work_id', function(request, response) {
    var work_id = request.params.work_id;
    Work.findOne({_id : work_id}, function(err, work) {
        if(err) {
            console.error('Error retrieving work');
            response.status(400).send(JSON.stringify(err));
            return;
        }
        response.status(200).send(work); 
    });
})

app.get('/area/:name', function(request, response) {
    var name = request.params.name;
    Work.find({Gallery_Location: name}, function(err, works) {
        if(err) {
            console.error('Error retrieving works');
            response.status(400).send(JSON.stringify(err));
            return;
        }
        response.status(200).send(works);
    });
})

app.get('/collection', function(request, response) {
    Work.find({}, function (err, works) {
        if (err) {
            console.error('Error retrieving collection');
            response.status(400).send(JSON.stringify(err));
            return;
        }
        response.status(200).send(works);

    })
})

var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});

// Login / Logout
/* request should have property login_name
    and respond with info needed by app for logged in user. 
*/


// *IMPORTANT* this is NOT MEANT TO BE SECURE, but only act as a deterrent to prevent logins from other devices.
//  Nno private data is being hosted. If this changes, will need to add security measures. 
app.post('/admin/login', function (request, response) {
    var login_name = request.body.login_name;
    var password = request.body.password;
    console.log(Object.keys(request), Object.keys(request.params), request.body);
    console.log("here");
    var u = 'Anderson';
    var p = 'Password';

    if (login_name !== u) {
        response.status(400).send("Incorrect username");
        return;
    }

    if(password !== p) {
        response.status(400).send("Wrong password");
        return;
    }

    request.session.login_name = u;
    response.status(200).send("Success");
    // User.findOne({login_name:login_name}, function(err, user) {
    //     if (err) {
    //         console.log('Error in query');
    //         response.status(400).send("Error during login");
    //         return;
    //     }
    //     if (user === null) {
    //         console.log('User login not found');
    //         response.status(400).send("User not found!");
    //         return;
    //     }
    //     if(!doesPasswordMatch(user.password_digest, user.salt, password)) {
    //         console.log(user);
    //         console.log("Wrong Password!");
    //         console.log(password);
    //         response.status(400).send("Wrong password!");
    //         return;
    //     }
    //     request.session.login_name = login_name;
    //     request.session.user_id = user._id;
    //     console.log(user._id);
    //     console.log(JSON.stringify(user._id));


    //     response.status(200).send(user);

    // });
}); 

app.post('/admin/logout', function(request, response) {

    if(request.session.login_name === undefined) {
        console.log("Trying to logout when no user is logged in");
        response.status(400).send("Trying to logout when no user is logged in");
        return;
    }
    delete request.session.login_name;
    delete request.session.user_id;
    request.session.destroy(function (err) {});
    response.status(200).send();
});

