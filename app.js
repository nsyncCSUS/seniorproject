var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var groups = require('./routes/groups');
var events = require('./routes/events');

var expressJwt = require('express-jwt');

var formidable = require('formidable');
var path = require('path');     //used for file path
var fs =require('fs-extra');    //File System-needed for renaming file etc





//this will aquire my database login file
var dbConfig = require('./db/db.js');
var mongoose = require('mongoose');
//var uriUtil = require('mongodb-uri'); <<<<<<<<<<<<<<< PROBLEM + updated mongoose to latest version (use npm update)

//Problem isolation: Cannot connect to the database
//connection setup
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

//var mongooseUri = uriUtil.formatMongoose(dbConfig.url) <<<<<<<<<<<<<<< NO LONGER NEEDED

//Connect to the DB
mongoose.connect(dbConfig.url, options); // Corrected URI

//create the models for each of the collections
//this first model will deal with the users collection
// ************ MOVED TO ./db/models/user.js *******************************
//mongoose.model('Users', {FirstName: String, MiddleName: String, LastName: String, Description: String, Email: String, Birthday: Date, Age: Number, City: String, State: String, ZipCode: Number, PhoneNum: Number, Picture: String, VolunteeredTo: String, CreatorOf: String, OrganizerOf: String, SubscribedTo: String, GooglePlus: String, Facebook: String, LinkenIn: String, Twitter: String, Interests: String, Skills: String })

var app = express();

var multipart = require('connect-multiparty');

app.use(multipart({
    uploadDir: './temp/'
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
app.route('/upload')
 .post(function (req, res, next) {

  var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = "./temp";       //set upload directory
    form.keepExtensions = true;     //keep file extension

    form.parse(req, function(err, fields, files) {
      console.log(files);
        console.log(fields);
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log("form.bytesReceived");
        //TESTING
        if(err)
          return handleError(req, res, err);

        //Formidable changes the name of the uploaded file
        //Rename the file to its original name
          res.end();
    });
});


*/



app.use('/', index);
app.use('/users', users);
app.use('/groups', groups);
app.use('/events', events);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//the following code will deal with the user GET code
//this code will mainly deal with the users page
app.get('/users', function (req, res){
	console.log('I received a GET request');
});

module.exports = app;
