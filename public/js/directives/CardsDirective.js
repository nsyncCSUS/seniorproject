(function() {

	var app = angular.module('cardsDirective', []);

	app.directive('groupCard', function() {
		return {
			restrict: 'E',
			templateUrl: '/js/directives/groupCard/groupCard.html'
		};
	}); 

	app.directive('groupEventCard', function() {
		return {
			restrict: 'E',
			templateUrl: '/js/directives/groupEventCard/groupEventCard.html'
		};
	}); 
	
	app.directive('pastGroupEventCard', function() {
		return {
			restrict: 'E',
			templateUrl: '/js/directives/groupEventCard/pastGroupEventCard.html'
		};
	}); 

	app.directive('eventCard', function() {
		return {
			restrict: 'E',
			templateUrl: '/js/directives/eventCard/eventCard.html'
		};
	}); 
	
	app.directive('pastEventCard', function() {
		return {
			restrict: 'E',
			templateUrl: '/js/directives/eventCard/pastEventCard.html'
		};
	}); 
	
	app.directive('userCard', function() {
		return {
			restrict: 'E',
			templateUrl: '/js/directives/userCard/userCard.html'
		};
	}); 
})();
