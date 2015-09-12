(function() {

    var app = angular.module('app', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'homeController', 'dashboardController',
        'usersController', 'groupsController', 'eventsController', 'signupController',
        'loginController', 'logoutController', 'createGroupController', 'createEventController'
    ]);

    //Creates object authInterceptor, attaches the token to the config.header
    app.factory('authInterceptor', function($rootScope, $q, $window) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    console.log($window.sessionStorage.token);
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
            console.log(prev.access.isFree);
            if (!curr.access.isFree && !LoginService.isLogged) {
                $location.path('/login');
            }
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
                templateUrl: '/views/app/home/home.jade',
                controller: 'HomeController',
                access: {
                    isFree: false
                }
            })
            .when('/dashboard', {
                templateUrl: '/views/app/dashboard/dashboard.jade',
                controller: 'DashboardController',
                access: {
                    isFree: false
                }
            })
            .when('/users', {
                templateUrl: '/views/app/users/users.jade',
                controller: 'UsersController',
                access: {
                    isFree: false
                }
            })
            .when('/users/:userId', {
                templateUrl: '/views/app/users/users.jade',
                controller: 'UsersController',
                access: {
                    isFree: false
                }
            })
            .when('/groups', {
                templateUrl: '/views/app/groups/groups.jade',
                controller: 'GroupsController',
                access: {
                    isFree: false
                }
            })
            .when('/groups/:groupId', {
                templateUrl: '/views/app/groups/groups.jade',
                controller: 'GroupsController',
                access: {
                    isFree: false
                }
            })
            .when('/events', {
                templateUrl: '/views/app/events/events.jade',
                controller: 'EventsController',
                access: {
                    isFree: false
                }
            })
            .when('/events/:eventId', {
                templateUrl: '/views/app/events/events.jade',
                controller: 'EventsController',
                access: {
                    isFree: false
                }
            })
            .when('/signup', {
                templateUrl: '/views/app/login/signup.jade',
                controller: 'SignupController',
                access: {
                    isFree: true
                }
            })
            .when('/login', {
                templateUrl: '/views/app/login/login.jade',
                controller: 'LoginController',
                access: {
                    isFree: true
                }
            })
            .when('/logout', {
                templateUrl: '/views/app/login/logout.jade',
                controller: 'LogoutController',
                access: {
                    isFree: true
                }
            })
            .when('/create/group', {
                templateUrl: '/views/app/groups/createGroup.jade',
                controller: 'CreateGroupController',
                access: {
                    isFree: false
                }
            })
            .when('/create/event', {
                templateUrl: '/views/app/events/createEvent.jade',
                controller: 'CreateEventController',
                access: {
                    isFree: false
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

    
    /**
     * Overrite refresh back event to redirect back 
     * to application root. 
     */
    angular.module('app').run(['$document', '$window', function($document, $window) {
        $window.onunload = function(event) {
            $window.location.href = '/';
        }; 
    }]); 

})();
