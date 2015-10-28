(function() {

  // 'ui.bootstrap',
  var app = angular.module('app', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'homeController', 'dashboardController',
    'usersController', 'groupsController', 'eventsController', 'signupController',
                                   'loginController', 'logoutController', 'createGroupController', 'createEventController', 'ngFileUpload','angular-jwt'
  ]);

  //Creates object authInterceptor, attaches the token to the config.header
    app.factory('authInterceptor', function($rootScope, $q, $window,jwtHelper) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
          console.log($window.sessionStorage.token);
            var decodedToken = jwtHelper.decodeToken($window.sessionStorage.token);
            console.log(decodedToken);
            $window.sessionStorage.userInfo = decodedToken; 
          config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        return config;
      },
      response: function(response) {
        if (response.status === 401) {
          // handle the case where the user is not authenticated
        }
        return response || $q.when(response);
      }
    };
  });


  // Uses the method .on to detect if an angular route has beend changed if that is the case
  // run the condition, checks the route access and also checks if the use is logged in
  app.run(function(LoginService, $rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(e, curr, prev) {
      console.log(curr);
      console.log(prev);
      //console.log(prev.access.isFree);
      //if (!curr.access.isFree && !LoginService.isLogged) {
      //    $location.path('/login');
      //}
    });
  });

  app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('authInterceptor'); // Everytime there is an http request the authInterceptor object will append the
    // token to the config.header. On the serverside express-jwt module will check this token if the route is protected

    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: '/partials/home.jade',
        controller: 'HomeController',
        access: {
          isFree: true
        }
      })
      .when('/dashboard', {
        templateUrl: '/partials/dashboard.jade',
        controller: 'DashboardController',
        access: {
          isFree: true
        }
      })
      .when('/users', {
        templateUrl: '/partials/users.jade',
        controller: 'UsersController',
        access: {
          isFree: true
        }
      })
      .when('/users/:userId', {
        templateUrl: '/partials/users.jade',
        controller: 'UsersController',
        access: {
          isFree: true
        }
      })
      .when('/groups', {
        templateUrl: '/partials/groups.jade',
        controller: 'GroupsController',
        access: {
          isFree: true
        }
      })
      .when('/groups/:groupId', {
        templateUrl: '/partials/groups.jade',
        controller: 'GroupsController',
        access: {
          isFree: true
        }
      })
      .when('/events', {
        templateUrl: '/partials/events.jade',
        controller: 'EventsController',
        access: {
          isFree: true
        }
      })
      .when('/events/:eventId', {
        templateUrl: '/partials/events.jade',
        controller: 'EventsController',
        access: {
          isFree: true
        }
      })
      .when('/signup', {
        templateUrl: '/partials/signup.jade',
        controller: 'SignupController',
        access: {
          isFree: true
        }
      })
      .when('/login', {
        templateUrl: '/partials/login.jade',
        controller: 'LoginController',
        access: {
          isFree: true
        }
      })
      .when('/logout', {
        templateUrl: '/partials/logout.jade',
        controller: 'LogoutController',
        access: {
          isFree: true
        }
      })
      .when('/create/group', {
        templateUrl: '/partials/createGroup.jade',
        controller: 'CreateGroupController',
        access: {
          isFree: true
        }
      })
      .when('/create/event', {
        templateUrl: '/partials/createEvent.jade',
        controller: 'CreateEventController',
        access: {
          isFree: true
        }
      })
      .otherwise({
        redirectTo: '/home'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);

})();
