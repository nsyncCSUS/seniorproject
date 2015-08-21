(function() {

	var app = angular.module('app', [ 'ngRoute', 'ngAnimate', 'homeController', 'dashboardController', 
	                                  'usersController', 'groupsController', 'eventsController', 'signupController', 
	                                  'loginController']);
	
	app.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
		$routeProvider
		.when('/', {
			redirectTo : '/home'
		})
		.when('/home', {
			templateUrl : '/partials/home.jade',
			controller : 'HomeController'
		})
		.when('/dashboard', {
			templateUrl : '/partials/dashboard.jade',
			controller : 'DashboardController'
		})
		.when('/users', {
			templateUrl : '/partials/users.jade',
			controller : 'UsersController'
		})
		.when('/groups', {
			templateUrl : '/partials/groups.jade',
			controller : 'GroupsController'
		})
		.when('/events', {
			templateUrl : '/partials/events.jade',
			controller : 'EventsController'
		})
		.when('/signup', {
			templateUrl : '/partials/signup.jade',
			controller : 'SignupController'
		})
		.when('/login', {
			templateUrl : '/partials/login.jade',
			controller : 'LoginController'
		})
		.when('/logout', {
			templateUrl : '/partials/logout.jade',
			controller : 'LogoutController'
		})
		.when('/create/group', {
			templateUrl : '/partials/createGroup.jade',
			controller : 'CreateGroupController'
		})
		.when('/create/event', {
			templateUrl : '/partials/createEvent.jade',
			controller : 'CreateEventController'
		})
		.otherwise({
			redirectTo : '/home'
		});
	
		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}]);

})();
