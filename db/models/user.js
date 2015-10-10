
(function(module) {
    'use strict';
    
    var bcrypt   = require('bcrypt-nodejs');
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId; 
	
	// Also consider:
	// var Schema = mongoose.Shema;
	// var UserSchema = new Schema({
	//     name: String,
	//     email: String 
	// });
	//
	// Spawning a model from a schema:
	// var User = new mongoose.model('User', UserSchema);
	// 
	// Adding Methods to Model:
	// UserSchema.methods.getName = function() {
	//     return this.name;
	// }; 
	// 
	// Creating a new User: 
	// var user = new User({name: 'John'});
	
	
	var UserSchema = new Schema({
	
		userAuth: {
		    userName: {
                        type: String,
                        required: true,
                        unique: true 
                    },
		    password: String 
		},
		
		fb : {
		    id : String,
		    access_token : String,
		    firstName : String,
		    lastName : String,
		    email : String
		},
            
		twitter : {
		    id : String,
		    token : String,
		    username : String,
		    displayName : String,
		    lastStatus : String
		},
		            
            firstName : String,
	    middleName : String,
	    lastName : String,
	    description : String,
	    email : String,
	    birthday : Date,
	    age : Number,
	    city : String,
	    state : String,
	    zipCode : Number,
	    phoneNum : Number,
	    picture : String,
	    //VolunteeredTo : String,
	    //CreatorOf : String,
	    //OrganizerOf : String,
	    //SubscribedTo : String,
	    //GooglePlus : String,
	    //Facebook : String,
	    //LinkenIn : String,
	    //Twitter : String,

            events: [{
                type: ObjectId,
                ref: 'Event'
            }], 
            
            createdGroups: [{
                type: ObjectId,
                ref: 'Group' 
            }],

            createdEvents: [{
                type: ObjectId,
                ref: 'Event' 
            }], 
            
            organizerOf: [{
                type: ObjectId,
                ref: 'Group' 
             }], 
            
            subscribedTo: [{
                type: ObjectId,
                ref: 'Group' 
            }],
            
	    interests : [String],
	    skills : [String] 
	});
	
	
	var User = mongoose.model('User', UserSchema);
	module.exports = User;

}) (module);
