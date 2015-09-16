(function() {
    var app = angular.module('createEventController', ['createEventService']);

    app.controller('CreateEventController', ['$scope', 'CreateEventService', function($scope, CreateEventService) {

    }]);

})();

/*
	event: {
		id: 			String,		
		creatorId: 		String,
		groupId: 		String,
		eventName: 		String,
		description: 	String,
		picture: 		String,
		creationDate: 	DateTime,
		startTimeDate: 	DateTime,
		endTimeDate: 	DateTime,
		address: 		String,
		city: 			String,
		state: 			String,
		zipcode: 		Number,		
		maxVolunteers: String,
		volunteers:	[{id: String}, {id: String}, ...],
		interests: [{type: String}, {type: String}, ...]
	}
*/