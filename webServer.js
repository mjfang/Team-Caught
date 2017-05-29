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

var Tour = require('./schema/tour.js');
var Work = require('./schema/work.js');
var express = require('express');
var app = express();

// XXX - Your submission should work without this line
// var cs142models = require('./modelData/photoApp.js').cs142models;

mongoose.connect('mongodb://m1:m12345@ds155651.mlab.com:55651/teamcaught');

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));


app.get('/', function (request, response) {
    response.send('Simple web server of files from ' + __dirname);
});

/*
 * Use express to handle argument passing in the URL.  This .get will cause express
 * To accept URLs with /test/<something> and return the something in request.params.p1
 * If implement the get as follows:
 * /test or /test/info - Return the SchemaInfo object of the database in JSON format. This
 *                       is good for testing connectivity with  MongoDB.
 * /test/counts - Return an object with the counts of the different collections in JSON format
 */
app.get('/test/:p1', function (request, response) {
    // Express parses the ":p1" from the URL and returns it in the request.params objects.
    console.log('/test called with param1 = ', request.params.p1);

    var param = request.params.p1 || 'info';

    if (param === 'info') {
        // Fetch the SchemaInfo. There should only one of them. The query of {} will match it.
        SchemaInfo.find({}, function (err, info) {
            if (err) {
                // Query returned an error.  We pass it back to the browser with an Internal Service
                // Error (500) error code.
                console.error('Doing /user/info error:', err);
                response.status(500).send(JSON.stringify(err));
                return;
            }
            if (info.length === 0) {
                // Query didn't return an error but didn't find the SchemaInfo object - This
                // is also an internal error return.
                response.status(500).send('Missing SchemaInfo');
                return;
            }

            // We got the object - return it in JSON format.
            console.log('SchemaInfo', info[0]);
            response.end(JSON.stringify(info[0]));
        });
    } else if (param === 'counts') {
        // In order to return the counts of all the collections we need to do an async
        // call to each collections. That is tricky to do so we use the async package
        // do the work.  We put the collections into array and use async.each to
        // do each .count() query.
        var collections = [
            {name: 'user', collection: User},
            {name: 'photo', collection: Photo},
            {name: 'schemaInfo', collection: SchemaInfo}
        ];
        async.each(collections, function (col, done_callback) {
            col.collection.count({}, function (err, count) {
                col.count = count;
                done_callback(err);
            });
        }, function (err) {
            if (err) {
                response.status(500).send(JSON.stringify(err));
            } else {
                var obj = {};
                for (var i = 0; i < collections.length; i++) {
                    obj[collections[i].name] = collections[i].count;
                }
                response.end(JSON.stringify(obj));

            }
        });
    } else {
        // If we know understand the parameter we return a (Bad Parameter) (400) status.
        response.status(400).send('Bad param ' + param);
    }
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
    Work.find({section: name}, function(err, works) {
        if(err) {
            console.error('Error retrieving works');
            response.status(400).send(JSON.stringify(err));
            return;
        }
        response.status(200).send(works);
    });
})



/*
 * URL /user/list - Return all the User object.
 */
app.get('/user/list', function (request, response) {
    var query = User.find({});
    query.select("first_name last_name _id").exec(function(err, users) {
        if(err) {
            console.error('Doing /user/list:', err);
            response.status(500).send(JSON.stringify(err));
            return;
        }
        console.log('Users:', users);
        response.status(200).send(JSON.stringify(users));
    });
});

/*
 * URL /user/:id - Return the information for User (id)
 */
app.get('/user/:id', function (request, response) {
    var id = request.params.id;

    var query = User.findOne({_id: id}).select("_id first_name last_name location description occupation").exec(function(err, user) {
        if(err) {
            console.error('Error doing /user/:id', err);
            response.status(400).send(JSON.stringify(err));
            return;
        }
        if(user === null) {
            console.log('User with _id:' + id + ' not found.');
            response.status(400).send('User not found');
            return;
        }
        response.status(200).send(user);
    });    
});

app.get('/commentsOfUser/:id', function(request, response) {
    var id = request.params.id;
    var commentList = [];
    Photo.find({}, function(err, photos) {

        if(err) {
            console.error('Doing /commentsOfUser/:id', err);
            response.status(400).send(JSON.stringify(err));
            return;
        }
        

        async.each(photos, fetchPhoto, allDonePhotos2);
        
        function fetchPhoto(photo, photoCallback) {
            if (photo === null) {
                console.error('Error in async photo');
                photoCallback('Error in retrieving photos');

                return;
            }
           

            var newPhoto = {};
            newPhoto.date_time = photo.date_time;
            newPhoto.file_name = photo.file_name;
            newPhoto._id = photo._id;
            newPhoto.user_id = photo.user_id;

            var comments = [];


            async.each(photo.comments, fetchComments, allDoneComments);

            
            function fetchComments(comment, commentCallback) {
                comment = JSON.parse(JSON.stringify(comment));

                if(comment === null) {
                    console.error('Error in async comment');
                    commentCallback('Error in retrieving photo comments');
                    return;
                }
                if(comment.user_id !== id) {
                    // console.log(comment);
                    console.log(comment.user_id + " " + id + typeof(comment.user_id) + typeof(id));
                    commentCallback();
                    return;
                }
                User.findOne({_id: comment.user_id}, function(err, user) {
                    if(err) {
                        console.error('Error in finding user of a comment');
                        commentCallback('Error in finding user of a comment');
                        return;
                    }
                    
                    var newComment = {};
                    var newUser = {};
                    console.log("USER" + user);
                    newUser._id = user._id;
                    newUser.first_name = user.first_name;
                    newUser.last_name = user.last_name;
                    newComment.user = newUser;
                    newComment.comment = comment.comment;
                    newComment._id = comment._id;
                    newComment.date_time = comment.date_time;
                    newComment.photo = newPhoto;
                    console.log("new comment: ", newComment);
                    commentList.push(newComment);
                    commentCallback(); 
                });

                
            }
            function allDoneComments(err) {
                console.log("allDoneComments");
                if(err) {
                    console.log("comment async error");
                    photoCallback(err);
                } else {
                    console.log("comment async2 success");
                    console.log(commentList);
                    photoCallback()
                }
                
            }

            
            
        }
        function allDonePhotos2(err) {
            console.log("allDonePhotos2");
            if (err) {
                console.log("Photocallback error");
            }
            else if (photos === null) {
                console.log('Photos for user with _id:' + id + ' not found.');
            }
            else {
                console.log("comments success: comments", commentList);
                response.status(200).send(commentList);   
            }
        }

    });
});

/*
 * URL /photosOfUser/:id - Return the Photos for User (id)
 */
app.get('/photosOfUser/:id', function (request, response) {
    var id = request.params.id;

    Photo.find({user_id: id}, function(err, photos) {

        if(err) {
            console.error('Doing /photosOfUser/:id', err);
            response.status(400).send(JSON.stringify(err));
            return;
        }

        var photoList = [];
        

        async.each(photos, fetchPhoto, allDonePhotos);
        
        function fetchPhoto(photo, photoCallback) {
            if (photo === null) {
                console.error('Error in async photo');
                photoCallback('Error in retrieving photos');

                return;
            }
            var newPhoto = {};
            var comments = [];


            async.each(photo.comments, fetchComments, allDoneComments);
            
            function fetchComments(comment, commentCallback) {
                if(comment === null) {
                    console.error('Error in async comment');
                    commentCallback('Error in retrieving photo comments');
                    return;
                }
                User.findOne({_id: comment.user_id}, function(err, user) {
                    if(err) {
                        console.error('Error in finding user of a comment');
                        commentCallback('Error in finding user of a comment');
                        return;
                    }
                    
                    var newComment = {};
                    var newUser = {};
                    console.log("USER" + user);
                    newUser._id = user._id;
                    newUser.first_name = user.first_name;
                    newUser.last_name = user.last_name;
                    newComment.user = newUser;
                    newComment.comment = comment.comment;
                    newComment._id = comment._id;
                    newComment.date_time = comment.date_time;

                    console.log("new comment: ", newComment);
                    comments.push(newComment);
                    commentCallback(); 
                });

                
            }
            function allDoneComments(err) {
                console.log("allDoneComments");
                if(err) {
                    console.log("comment async error");
                    photoCallback(err);

                } else {
                    console.log("comment async success");
                    console.log(comments);
                    newPhoto.comments = comments;
                    newPhoto.date_time = photo.date_time;
                    newPhoto.file_name = photo.file_name;
                    newPhoto._id = photo._id;
                    newPhoto.user_id = photo.user_id;
                    photoList.push(newPhoto);
                    console.log(newPhoto.comments);
                    photoCallback();
                }
                
            }

            
            
        }
        function allDonePhotos(err) {
            console.log("allDonePhotos");
            if (err) {
                console.log("Photocallback error");
            }
            else if (photos === null) {
                console.log('Photos for user with _id:' + id + ' not found.');
            }
            else {
                console.log("photos success: PHOTOS", photoList);
                response.status(200).send(photoList);   
            }
        }

    });
});


var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});


