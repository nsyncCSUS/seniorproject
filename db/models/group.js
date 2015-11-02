
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
        name: {
        	type: String,
        	required: true
        },
        
        picture: {
        	type: String,
        	default: "//placehold.it/500x500/"
        },
        
    	creationDate: {
    		type: Date,
    		required: true
    	},
    	city: 				String, 
    	state: 				String, 
    	zipcode: 			String,
    	description : 		String,
    	googlePlusURL : 	String,
    	facebookURL : 		String,
    	linkedInURL : 		String,
    	twitterURL: 		String,
    	personalWebsiteURL: String,

        events: [{
            type: ObjectId,
            ref: 'Event'
        }],
        organizers: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        subscriptions: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        interests: [String] 
    }); 
    
    
    var Group = mongoose.model('Group', GroupSchema); 
    module.exports = Group;

})(module);

