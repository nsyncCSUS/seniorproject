var express = require('express');
var router = express.Router();

// Import controllers
var UsersController = require('./users.js'); 

var Controllers = {
  users: new UsersController(), 
};



router.get('/', function(req, res, next) {
	res.render('index', { title: 'Senior Project' });
});

router.get('/partials/:page', function(req, res, next) {
	var page = req.params.page;
	res.render('partials/' + page);
});

router.get('*', function(req, res, next) {
	res.render('index', { title: 'Senior Project' });
});

// NOTE: All these routing functions must come after 
// the initial utility routes or else they'll interfere
// with each other. 

/**
 * John
 *
 * Route root requests to controllers. 
 */
router.get('/:controller', function(request, response) {
  var controller = Controllers[request.params.controller]; 
  controller.get(request, response);
}); 

/**
 * John
 *
 * Route specific get requests to controller. 
 */
router.get('/:controller/:id', function(request, response) {
  var controller = Controllers[request.params.controller]
  controller.get(request, response); 
}); 


/**
 * John
 *
 * Route Post requests to controllers 
 */
router.post('/:controller', function(request, response) {
  var controller = Controllers[request.params.controller]; 
  controller.post(request, response); 
}); 


/**
 * John
 *
 * Route Update requests to controllers 
 */
router.put('/:controller/:id', function(request, response) {
  var controller = Controllers[request.params.controller]; 
  controller.put(request, response); 
}); 


/**
 * John
 *
 * Route Delete requests to contorllers
 */
router.delete('/:controller/:id', function(request, response) {
  var controller = Controllers[request.params.controller]; 
  controller.delete(request, response); 
}); 


router.get('/:controller1/:id1/:controller2', function(request, response) {
  console.log('GET ' + request.params.controller1 + ', ' + request.params.controller2); 
  var controller = Controllers[request.params.controller1]; 
  controller[request.params.controller2].get(request, response); 
}); 

router.get('/:controller1/:id1/:controller2/:id2', function(request, response) {
  var controller = Controllers[request.params.controller1]; 
  controller[request.params.controller2].get(request, response); 
}); 

router.post('/:controller1/:id1/:controller2', function(request, response) {
  var controller = Controllers[request.params.controller1]; 
  controller[request.params.controller2].post(request, response); 
}); 

router.put('/:controller1/:id1/:controller2/:id2', function(request, response) {
  var controller = Controllers[request.params.controller1]; 
  controller[request.params.controller2].put(request, response); 
}); 

router.delete('/:controller1/:id1/:controller2/:id2', function(request, response) {
  var controller = Controllers[request.params.controller1]; 
  controller[request.params.controller2].delete(request, response); 
}); 


module.exports = router;
