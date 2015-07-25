
var fs = require('fs');
var mongo = require('mongojs');
var passport = require('passport');
var mongoose = require('mongoose');
var express = require('express');

var PORT = 8888;

var app = express();
app.use(express.static(__dirname)); 

app.get('*', function(request, response) {
  response.sendFile('public/views/index.html');
});

app.listen(PORT);
console.log("Listening on port " + PORT);


