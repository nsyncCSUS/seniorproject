
var app = angular.module('app', ['ngRoute']); 


app.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/', {
    redirectTo: '/home'
  }).when('/home', {
    templateUrl: '',
    controller: 'HomeController'
  }).when('/dashboard', {
    templateUrl: '',
    controller: 'DashboardController'
  }).when('/users', {
    templateUrl: '', 
    controller: 'UsersController'
  }).when('/groups', {
    templateUrl: '', 
    controller: 'GroupsController'
  }).when('/events', {
    templateUrl: '', 
    controller: 'EventsController'
  }).otherwise({
    redirectTo: '/home'
  }); 
  
}]); 


