(function() {

	var app = angular.module('app', [ 'ngRoute', 'ngAnimate', 'homeController', 'dashboardController',
	                                  'usersController', 'groupsController', 'eventsController', 'signupController',
																		'loginController']);
// Uses the method .on to detect if an angular route has beend changed if that is the case
// run the condition, checks the route access and also checks if the use is logged in
	app.run(function(LoginService,$rootScope,$location) {
		$rootScope.$on('$routeChangeStart', function(e, curr, prev){
			console.log(curr);
			console.log(prev);
			console.log(prev.access.isFree );
			if (!curr.access.isFree && !LoginService.isLogged) {
					  $location.path('/login');
				 }
	});
});

	app.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
		.when('/', {
			redirectTo : '/home'
		})
		.when('/home', {
			templateUrl : '/partials/home.jade',
			controller : 'HomeController',
			access: {
			isFree: false
		}
		})
		.when('/dashboard', {
			templateUrl : '/partials/dashboard.jade',
			controller : 'DashboardController',
			access: {
			isFree: false
		}
		})
		.when('/users', {
			templateUrl : '/partials/users.jade',
			controller : 'UsersController',
			access: {
			isFree: false
		}
		})
		.when('/users/:userId', {
			templateUrl : '/partials/users.jade',
			controller : 'UsersController',
			access: {
			isFree: false
		}
		})
		.when('/groups', {
			templateUrl : '/partials/groups.jade',
			controller : 'GroupsController',
			access: {
			isFree: false
		}
		})
		.when('/groups/:groupId', {
			templateUrl : '/partials/groups.jade',
			controller : 'GroupsController',
			access: {
			isFree: false
		}
		})
		.when('/events', {
			templateUrl : '/partials/events.jade',
			controller : 'EventsController',
			access: {
			isFree: false
		}
		})
		.when('/events/:eventId', {
			templateUrl : '/partials/events.jade',
			controller : 'EventsController',
			access: {
			isFree: false
		}
		})
		.when('/signup', {
			templateUrl : '/partials/signup.jade',
			controller : 'SignupController',
			access: {
			isFree: true
		}
		})
		.when('/login', {
			templateUrl : '/partials/login.jade',
			controller : 'LoginController',
			access: {
			isFree: true
		}
		})
		.when('/logout', {
			templateUrl : '/partials/logout.jade',
			controller : 'LogoutController',
			access: {
			isFree: true
		}
		})
		.when('/create/group', {
			templateUrl : '/partials/createGroup.jade',
			controller : 'CreateGroupController',
			access: {
			isFree: false
		}
		})
		.when('/create/event', {
			templateUrl : '/partials/createEvent.jade',
			controller : 'CreateEventController',
			access: {
			isFree: false
		}
		})
		.otherwise({
			redirectTo : '/home'
		});

		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}]);

})();
