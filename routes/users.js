var express = require('express');
var router = express.Router();

function UsersController() {
  //console.log("Initializing Users Controller..."); 
};


var testUser = {
  id: 1, 
  fname: "Test", 
  lname: "User", 
  events: [ 
    {id: 1, name: "Test Event 1"},
    {id: 2, name: "Test Event 2"}
  ], 

  groups: [ 
    {id: 1, name: "Test Group 1"},
    {id: 2, name: "Test Group 2"}
  ],
}; 


/**
 * John
 *
 * Collection of functions to do with routing Users data.
 *
 * NOTE: Replace later with Mongoose calls. 
 */
UsersController.prototype = {
  get: function(request, response) {
    var id = request.params.id; 
    var data = {}; 
    if(id !== null && id !== undefined) {
      // Perform actions to do with this specific user. 
      if(testUser.id === id) {
        data = testUser; 
      }
    } else {
      data = [testUser]; 
    }

    response.send(data); 
  },

  post: function(request, response) {
    response.send({message: "Hello"}); 
  },

  put: function(request, response) {
    response.send({}); 
  }, 

  delete: function(request, response) {
    response.send({}); 
  }, 

  /**
   * John
   *
   * Secondary controller for handling nested actions. 
   */
  events: {
    get: function(request, response) {
      var id1 = request.params.id1; 
      var id2 = request.params.id2; 
      var data = {}; 
      if(id1 == null || id1 == undefined) {
        // No user specified; Return illegal access 
      } else if(id1 == testUser.id) {
        if(id2 == null || id2 == undefined) {
          data = testUser.events || {}; 
        } else {
          data = testUser.events.filter(function(item) {return item.id == id2;}); 
        }
      } else {
        // Return 404 
      }

      response.send(data); 
    },

    post: function(request, response) {
      response.send({}); 
    },

    put: function(request, response) {
      response.send({}); 
    }, 

    delete: function(request, respons) {
      response.send({}); 
    },
  },


  /**
   * John
   *
   * Intermediary controller for handling actions to 
   * do with a user's subscribed Groups. 
   */
  groups: {
    get: function(request, response) {
      var id1 = request.params.id1; 
      var id2 = request.params.id2; 
      var data = {}; 
      if(id1 == null || id1 == undefined) {
        // No user specified: Illegal access 
        // Return 404
      } else if(id1 == testUser.id) {
        if(id2 == null || id2 == undefined) {
          // Request for all group 
          data = testUser.groups || {}; 
        } else {
          // Request for specific groups 
          data = testUser.groups.filter(function(item) {return item.id == id2;}); 
        }
      } else {
        // return 404 
      }

      response.send(data); 
    }, 

    post: function(request, response) {
      response.send({}); 
    }, 

    put: function(request, response) {
      response.send({}); 
    }, 

    delete: function(request, response) {
      response.send({}); 
    }, 
  },
};

module.exports = UsersController;
//module.exports = router;
