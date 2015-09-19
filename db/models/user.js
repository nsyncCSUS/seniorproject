var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


(function(module) {
	'use strict';
	
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	
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
		    userName: String,
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
		
		/*user : {
			FirstName : String,
			MiddleName : String,
			LastName : String,
			Description : String,
			Email : String,
			Birthday : Date,
			Age : Number,
			City : String,
			State : String,
			ZipCode : Number,
			PhoneNum : Number,
			Picture : String,
			VolunteeredTo : String,
			CreatorOf : String,
			OrganizerOf : String,
			SubscribedTo : String,
			GooglePlus : String,
			Facebook : String,
			LinkenIn : String,
			Twitter : String,
			Interests : String,
			Skills : String
		 }*/
            
            FirstName : String,
	    MiddleName : String,
	    LastName : String,
	    Description : String,
	    Email : String,
	    Birthday : Date,
	    Age : Number,
	    City : String,
	    State : String,
	    ZipCode : Number,
	    PhoneNum : Number,
	    Picture : String,
	    //VolunteeredTo : String,
	    //CreatorOf : String,
	    //OrganizerOf : String,
	    //SubscribedTo : String,
	    //GooglePlus : String,
	    //Facebook : String,
	    //LinkenIn : String,
	    //Twitter : String,

            /*VolunteeredTo: [{
                type: ObjectId,
                ref: '' 
             }],*/

            Events: [{
                type: ObjectId,
                ref: 'Event'
            }], 
            
            CreatedGroups: [{
                type: ObjectId,
                ref: 'Group' 
            }],

            CreatedEvents: [{
                type: ObjectId,
                ref: 'Event' 
            }], 
            
            OrganizerOf: [{
                type: ObjectId,
                ref: 'Group' 
             }], 
            
            SubscribedTo: [{
                type: ObjectId,
                ref: 'Group' 
            }],
            
	    Interests : [String],
	    Skills : [String] 
	});
	
	
	var User = mongoose.model('User', UserSchema);
	module.exports = User;

}) (module);
