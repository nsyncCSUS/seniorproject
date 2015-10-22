
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
        name: String,
        
        picture: {
        	type: String,
        	default: "//placehold.it/500x500/"
        },
        
    	creationDate : 		Date,
    	city: 				String, 
    	state: 				String, 
    	zipcode: 			String,
    	description : 		String,
    	googlePlusURL : 	String,
    	facebookURL : 		String,
    	linkInURL : 		String,
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

/*
group: {
	id : 				String,
	name : 				String,
	picture : 			String,
	creationDate : 		String,
	city: 				String, 
	state: 				String, 
	zipcode: 			String,
	description : 		String,
	googlePlusURL : 	String,
	facebookURL : 		String,
	linkInURL : 		String,
	twitterURL: 		String,
	personalWebsiteURL: String,
	events:				[{id: String}, {id: String}, ...],
	organizers:			[{id: String}, {id: String}, ...],
	subscribers:		[{id: String}, {id: String}, ...],
	interests: 			[String]

}
*/