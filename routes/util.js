(function(exports) {
    'use strict';

    var Event = require('../db/models/event.js');
    var Group = require('../db/models/group.js');
    var User = require('../db/models/user.js'); 


    /**
     * John
     * Function for taking a projection of an Event
     * from an Http request. We take a projection to
     * make sure that no unwanted parameters get into 
     * the model. 
     */
    exports.takeEventProjection = function(event) {
        return new Event({
            
        }); 
    };


    /**
     * John
     * Function for taking an attribute projection from
     * a user object received from an Http request. 
     */
    exports.takeUserProjection = function(user) {
        return new User({
            
        }); 
    };


    /**
     * John 
     * Function for taking a projection of a received 
     * group object. 
     */
    exports.takeGroupProjection = function(group) {
        return new Group({
            
        }); 
    };


    /**
     * Function for logging internal server error
     */
    exports.err = function(err, response) {
        console.log(err);
        response.status(500).send({
            err: err
        });
    };

    
    return exports; 
})(module.exports);
