(function(module) {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId;
    var User = require('./user');
    var Group = require('./group');

    /**
     * Schema for Event objects
     */
    var EventSchema = new Schema({
        name: String,

        creationUser: {
            type: ObjectId,
            ref: 'User'
        },
        
        group: {
            type: ObjectId,
            ref: 'Group'
        },

        picture: {
        	type: String,
    		default: "//placehold.it/500x500/"
        },
        
		description: 	String,
		creationDate: 	Date,
		startTimeDate: 	Date,
		endTimeDate: 	Date,
		street: 		String, 
		city: 			String, 
		state: 			String, 
		zipcode: 		String,	
		maxVolunteers: 	Number,
        
        volunteers: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        interests: [String] 
    });

    var Event = mongoose.model('Event', EventSchema);
    module.exports = Event;

})(module);

/*
	event: {
		id: 			String,		
		creatorId: 		String,
		groupId: 		String,
		name: 			String,
		description: 	String,
		picture: 		String,
		creationDate: 	DateTime,
		startTimeDate: 	DateTime,
		endTimeDate: 	DateTime,
		street: 		String, 
		city: 			String, 
		state: 			String, 
		zipcode: 		String,	
		maxVolunteers: 	Number,
		volunteers:		[{id: String}, {id: String}, ...],
		interests: 		[String]
	}
*/
