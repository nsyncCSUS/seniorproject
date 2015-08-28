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
	id: String,
	groupId: String,
	eventName: String,
	description: String,
	picture: String,
	creationDate: DateTime,
	startTimeDate: DateTime,
	endTimeDate: DateTime,
	address: String,
	city: String,
	state: String,
	zipcode: Number,
	volunteerList: {
	id: String
	},
	creatorId: String,
	maxVolunteers: String,
	interests: 	{
				type: String
	}
*/