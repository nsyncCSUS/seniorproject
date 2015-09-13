var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


var userSchema = new mongoose.Schema({
//HL userAuth: set when registering look@signupcontroller or routes/user.js
	userAuth: {
			userName: String,
			password: String,
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

	user : {
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
	}

});

module.exports = mongoose.model('User',userSchema);
