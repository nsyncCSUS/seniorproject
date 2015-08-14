(function() {
	var app = angular.module('homeController', ['homeService', 'homeFactory']);

	app.controller('HomeController', [ '$scope', 'HomeService', 'HomeFactory', function($scope, HomeService, HomeFactory) {

		/***************************************************************************
		 * Variables (includes ones from scope too)
		 **************************************************************************/
		this.isSearching = false;	// Default
		this.currentTab;
		
		$scope.searchtext;
		$scope.usersSearchResults;
		$scope.groupsSearchResults;
		$scope.eventsSearchResults;

		/***************************************************************************
		 * Initialize the search for users, groups, events based on keywords
		 * 	- Search Users
		 * 	- Search Groups
		 * 	- Search Events
		 **************************************************************************/
		$scope.search = function(searchbox) {
			if (searchbox.length > 0){
				this.isSearching = true;
			
				$scope.searchtext = searchbox;
				$scope.searchbox = '';
				this.currentTab = 'users';
				
				// Get users
				$scope.usersSearchResults = HomeService.getUserSearchResults();
				// Get Groups
				$scope.groupsSearchResults = HomeService.getGroupSearchResults();
				// Get Events
				$scope.eventsSearchResults = HomeService.getEventSearchResults();
			}
		}

		/***************************************************************************
		 * Functions that controls the view for searching or not search
		 **************************************************************************/
		$scope.searching = function() {
			if (this.isSearching == true)
				return true;
			else
				return false;
		}
		$scope.stopSearching = function() {
			this.isSearching = false;
		}

		

		/***************************************************************************
		 * Functions that controls tabs for searching
		 **************************************************************************/
		$scope.setCurrentTab = function(category) {
			this.currentTab = category;
		}
		
		$scope.getCurrentTab = function(category) {
			if (this.currentTab === category)
				return true;
			else
				return false;
		}
		
	} ]);

})();