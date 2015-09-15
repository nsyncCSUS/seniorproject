(function() {
	var app = angular.module('eventsController', [ 'eventService', 'eventFactory' ]);

	app.controller('EventsController', [ '$scope', '$routeParams', 'EventService', 'EventFactory', function($scope, $routeParams, EventService, EventFactory) {

		/***************************************************************************
		 * Variables (includes ones from scope too)
		 **************************************************************************/
		$scope.eventId = $routeParams.eventId;

	
		/***************************************************************************
		 * Admin Testing
		 **************************************************************************/
		$scope.isAdmin = false;
		$scope.toggleAdmin = function() {
			$scope.isAdmin = !$scope.isAdmin;
		}
		
		
	} ]);

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