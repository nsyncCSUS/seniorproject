(function() {
	var app = angular.module('eventsController', [ 'eventService', 'eventFactory' ]);

	app.controller('EventsController', [ '$scope', '$routeParams', 'EventService', 'EventFactory', function($scope, $routeParams, EventService, EventFactory) {

		$scope.eventId = $routeParams.eventId;
		
	} ]);

})();
