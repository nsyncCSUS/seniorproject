
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
        eventName: String,
        
        group: {
            type: ObjectId,
            ref: 'Group'
        },
        
        description: String,
        creationDate: Date,
        startTimeDate: Date,
        endTimeDate: Date,
        address: String,
        city: String,
        state: String,
        zipcode: String,
        
        volunteerList: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        creationUser: {
            type: ObjectId,
            ref: 'User'
        },
        
        maxVolunteers: Number,
        interests: [String] 
    });
    
    var Event = mongoose.model('Event', EventSchema);
    module.exports = Event;

})(module);

