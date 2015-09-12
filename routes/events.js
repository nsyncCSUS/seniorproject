var express = require('express');
var router = express.Router();
// Expressjwt module checks if the token given is correct
// the token is given though angular every time there is an http request
// check authInterceptor in seniorprojectapp.js
var expressJwt = require('express-jwt');
router.use(expressJwt({
    secret: 'secret'
}));



var router = express.Router(); 
router.get('/', function(request, response, next) {}); 
router.get('/:id', function(request, response, next) {}); 
router.put('/:id', function(request, response, next) {}); 
router.post('/', function(request, response, next) {}); 
router.delete('/:id', function(request, response, next) {}); 

var users = express.Router({mergeParams: true}); 
router.get('/', function(request, response, next) {}); 
router.get('/:id2', function(request, response, next) {}); 
router.put('/:id2', function(request, response, next) {}); 
router.post('/', function(request, response, next) {}); 
router.delete('/:id2', function(request, response, next) {}); 

var groups = express.Router({mergeParams: true}); 
router.get('/', function(request, response, next) {}); 
router.get('/:id2', function(request, response, next) {}); 
router.put('/:id2', function(request, response, next) {}); 
router.post('/', function(request, response, next) {}); 
router.delete('/:id2', function(request, response, next) {}); 

router.use('/:id1/users', users); 
router.use('/:id1/groups', groups); 

module.exports = router;
