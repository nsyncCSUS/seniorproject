(function() {
	var app = angular.module('eventService', []); 
	
	/**
	 * Event Service
	 * 
	 * This Service is meant to act as a wrapper around 
	 * http calls to the Event controller on the server. 
	 * This service contains calls to the following routes: 
	 *
	 * - GET      /events/
	 * - GET      /events/:id 
	 * - PUT      /events/
	 * - POST     /events/ 
	 * - DELETE   /events/:id 
	 *
	 * - GET      /events/:id/groups
	 * - GET      /events/:id/users 
	 * - GET      /events/:id/groups/:id 
	 * - GET      /events/:id/users/:id 
	 * - PUT      /events/:id/groups/:id 
	 * - PUT      /events/:id/users/:id 
	 * - POST     /events/:id/groups/:id 
	 * - POST     /events/:id/users/:id 
	 * - DELETE   /events/:id/groups/:id 
	 * - DELETE   /events/:id/users/:id 
	 */
	app.service('EventService', ['$http', function($http) {
	  
	  /**
	   * Get a list of events. This function retreives a 
	   * list of events via ajax and returns them to the 
	   * caller. 
	   *
	   * Args: 
	   * - params: A JSON object containing search parameters
	   *   to pass to the API. 
	   * - callback: A function to be called once the http
	   *   request returns. 
	   */
	  this.getEvents = function(params, callback, error) {}; 
	  this.getEvent = function(params, callback, error) {}; 
	  this.updateEvent = function(params, callback, error) {}; 
	  this.createEvent = function(params, callback, error) {}; 
	
	  this.getGroupsForEvent = function(params, callback, error) {}; 
	  this.getGroupForEvent = function(params, callback, error) {}; 
	  this.getUsersForEvent = function(params, callback, error) {}; 
	  this.getUserForEvent = function(params, callback, error) {}; 
	  this.updateGroupForEvent = function(params, callback, error) {}; 
	  this.updateUserForEvent = function(params, callback, error) {}; 
	  this.createGroupForEvent = function(params, callback, error) {}; 
	  this.createUsersForEvent = function(params, callback, error) {}; 
	  this.deleteGroupForEvent = function(params, callback, error) {}; 
	  this.deleteUserForEvent = function(params, callback, error) {}; 
	
	}]); 

})();
