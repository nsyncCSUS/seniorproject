var mongoose = require('mongoose');

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
      /*
		    userName: {
                        type: String,
                        required: true,
                        unique: true
                    },
                    */
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
		
        firstName : String,
	    middleName : String,
	    lastName : String,
	    
        picture: {
        	type: String,
    		default: "//placehold.it/500x500/"
        },
        
	    description : 		String,
	    email : 			String,
	    birthday : 			Date,
	    age : 				Number,
	    city : 				String,
	    state : 			String,
	    zipCode : 			Number,
	    phoneNum : 			Number,
		googlePlusURL : 	String,
		facebookURL : 		String,
		linkInURL : 		String,
		twitterURL: 		String,

        volunteeredTo: [{
            type: ObjectId,
            ref: 'Event'
        }], 

        creatorOf: [{
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
            
	    interests : [String]
	});
	
	
	var User = mongoose.model('Users', UserSchema);
	module.exports = User;

}) (module);

/*
	user: {
		firstName : 	String,
		middleName : 	String,
		lastName : 		String,
		description : 	String,
		picture:		String,
		email : 		String,
		birthday : 		Date,
		age : 			Number,
		city: 			String, 
		state: 			String, 
		zipcode: 		String,	
		phoneNum : 		Number,
		googlePlusURL : 	String,
		facebookURL : 		String,
		linkInURL : 		String,
		twitterURL: 		String,
		volunteeredTo : [{id: String}, {id: String}, ...],
		creatorOf : 	[{id: String}, {id: String}, ...],
		organizerOf : 	[{id: String}, {id: String}, ...],
		subscribedTo : 	[{id: String}, {id: String}, ...],
		interests : 	[String]
	}
*/