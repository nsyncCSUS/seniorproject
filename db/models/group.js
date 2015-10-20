
(function(module) {
    'use strict';
    
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId; 
    var Event = require('./event');
    var User = require('./user'); 
    
    /**
     * Schema for Group Objects 
     */
    var GroupSchema = new Schema({
        groupName: String,
        
        eventList: [{
            type: ObjectId,
            ref: 'Event'
        }],
        
        creationDate: Date,
        city: String,
        state: String,
        zipcode: String,
        
        organizerList: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        subscriptionList: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        decsription: String,
        //GooglePlus: {},
        //Facebook: {},
        //LinkedIn: {},
        //Twitter: {},
        //Website: {},
        interests: [String] 
    }); 
    
    
    var Group = mongoose.model('Group', GroupSchema); 
    module.exports = Group;

})(module);
