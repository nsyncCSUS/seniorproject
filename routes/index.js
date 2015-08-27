var express = require('express');
var router = express.Router();

// Import controllers
var UsersController = require('./users.js'); 
var GroupsController = require('./groups.js');
var EventsController = require('./events.js');

var Controllers = {
  users: new UsersController(), 
  groups: new GroupsController(),
  events: new EventsController(),
};



router.get('/', function(req, res, next) {
	res.render('index', { title: 'Senior Project' });
});


router.get('/partials/:page', function(req, res, next) {
	var page = req.params.page;
	res.render('partials/' + page);
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
  if(controller == null || controller == undefined) {
    // Send 404
    response.status(404).send('Not Found');
  } else {
    controller.get(request, response);
  }
}); 


/**
 * John
 *
 * Route specific get requests to controller. 
 */
router.get('/:controller/:id', function(request, response) {
  var controller = Controllers[request.params.controller]
  if(controller == null || controller == undefined) {
    // Send 404
    response.status(404).send('Not Found');
  } else {
    controller.get(request, response); 
  }
}); 


/**
 * John
 *
 * Route Post requests to controllers 
 */
router.post('/:controller', function(request, response) {
  var controller = Controllers[request.params.controller]; 
  if(controller == null || controller == undefined) {
    // Send 404
    response.status(404).send('Not Found');
  } else {
    controller.post(request, response); 
  }
}); 


/**
 * John
 *
 * Route Update requests to controllers 
 */
router.put('/:controller/:id', function(request, response) {
  var controller = Controllers[request.params.controller]; 
  if(controller == null || controller == undefined) {
    // Send 404
    response.status(404).send('Not Found');
  } else {
    controller.put(request, response); 
  }
}); 


/**
 * John
 *
 * Route Delete requests to contorllers
 */
router.delete('/:controller/:id', function(request, response) {
  var controller = Controllers[request.params.controller]; 
  if(controller == null || controller == undefined) {
    // Send 404
    response.status(404).send('Not Found');
  } else {
    controller.delete(request, response); 
  }
}); 



// Compound url requests for nested controller actions

router.get('/:controller1/:id1/:controller2', function(request, response) {
  // console.log('GET ' + request.params.controller1 + ', ' + request.params.controller2); 
  var controller1 = Controllers[request.params.controller1]; 
  if(controller1 == null || controller1 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  var controller2 = controll1[request.params.controller2];
  if(controller2 == null || controller2 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  controller2[request.params.controller2].get(request, response); 
}); 


router.get('/:controller1/:id1/:controller2/:id2', function(request, response) {
  var controller1 = Controllers[request.params.controller1]; 
  if(controller1 == null || controller1 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  var controller2 = controll1[request.params.controller2];
  if(controller2 == null || controller2 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  controller2[request.params.controller2].get(request, response); 
}); 


router.post('/:controller1/:id1/:controller2', function(request, response) {
  var controller1 = Controllers[request.params.controller1]; 
  if(controller1 == null || controller1 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  var controller2 = controll1[request.params.controller2];
  if(controller2 == null || controller2 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  controller2[request.params.controller2].post(request, response);  
}); 


router.put('/:controller1/:id1/:controller2/:id2', function(request, response) {
  var controller1 = Controllers[request.params.controller1]; 
  if(controller1 == null || controller1 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  var controller2 = controll1[request.params.controller2];
  if(controller2 == null || controller2 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  controller2[request.params.controller2].put(request, response);  
}); 


router.delete('/:controller1/:id1/:controller2/:id2', function(request, response) {
  var controller1 = Controllers[request.params.controller1]; 
  if(controller1 == null || controller1 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  var controller2 = controll1[request.params.controller2];
  if(controller2 == null || controller2 == undefined) {
    response.status(404).send('Not Found');
    return;
  } 
  
  controller2[request.params.controller2].delete(request, response); 
}); 


/**
 * Render index if no route matched
 */
router.get('*', function(req, res, next) {
	res.render('index', { title: 'Senior Project' });
});



module.exports = router;
