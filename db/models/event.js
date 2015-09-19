
(function(module) {
   'use strict';
   
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var User = require('./user');
    var Group = require('./group'); 
    
    /**
     * Schema for Event objects 
     */
    var EventSchema = new Schema({
        EventName: String,
        
        Group: {
            type: ObjectId,
            ref: 'Group'
        },
        
        Description: String,
        CreationDate: Date,
        StartTimeDate: Date,
        EndTimeDate: Date,
        Address: String,
        City: String,
        State: String,
        Zipcode: String,
        
        VolunteerList: [{
            type: ObjectId,
            ref: 'User'
        }],
        
        CreationUser: {
            type: ObjectId,
            ref: 'User'
        },
        
        MaxVolunteers: Number,
        Interests: [String] 
    });
    
    var Event = mongoose.model('Event', EventSchema);
    module.exports = Event;

})(module);
