var mongoose = require('mongoose');

module.exports = mongoose.model('User', {

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
