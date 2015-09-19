
(function(module) {
    'use strict';
    
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var Event = require('./event');
    var User = require('./user'); 
    
    /**
     * Schema for Group Objects 
     */
    var GroupSchema = new Schema({
        GroupName: String,
        
        EventList: [{
            type: ObjectId,
            ref: 'Event'
        }],
        
        CreationDate: Date,
        city: String,
        state: String,
        zipcode: String,
        
        OrganizerList: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        SubscriptionList: [{
            type: Objectid,
            ref: 'User'
        }],
        
        Decsription: String,
        //GooglePlus: {},
        //Facebook: {},
        //LinkedIn: {},
        //Twitter: {},
        //Website: {},
        Interests: [String] 
    }); 
    
    
    var Group = mongoose.model('Group', GroupSchema); 
    module.exports = Group;

})(module);

