(function() {
    var app = angular.module('homeController', ['homeService', 'homeFactory']);

    app.controller('HomeController', ['$scope', 'HomeService', 'HomeFactory', function($scope, HomeService, HomeFactory) {

        /***************************************************************************
         * Variables (includes ones from scope too)
         **************************************************************************/
        this.isSearching = false; // Default
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
            if (searchbox.length > 0) {
                this.isSearching = true;

                $scope.searchtext = searchbox;
                $scope.searchbox = '';
                this.currentTab = 'events';

                // Get Events
                $scope.eventsSearchResults = HomeService.getEventSearchResults();
                // Get users
                $scope.usersSearchResults = HomeService.getUserSearchResults();
                // Get Groups
                $scope.groupsSearchResults = HomeService.getGroupSearchResults();
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

    }]);

})();

/*
	user: {
		firstName : 	String,
		middleName : 	String,
		lastName : 		String,
		description : 	String,
		picture:		String,
		email : 		String,
		birthday : 		Date,
		age : 			Number,
		location :		{city: String, state: String, zipcode: String},	
		phoneNum : 		Number,
		googlePlus : 	String,
		facebook : 		String,
		linkedIn : 		String,
		twitter : 		String,
		volunteeredTo : [{id: String}, {id: String}, ...],
		creatorOf : 	[{id: String}, {id: String}, ...],
		organizerOf : 	[{id: String}, {id: String}, ...],
		subscribedTo : 	[{id: String}, {id: String}, ...],
		interests : 	[{type: String}, {type: String}, ...]
	}
*/

/*
	group: {
		id : 				String,
		name : 				String,
		picture : 			String,
		creationDate : 		String,
		location :			[{city: String, state: String, zipcode: String}, ...],
		description : 		String,
		googlePlusURL : 	String,
		facebookURL : 		String,
		linkInURL : 		String,
		twitterURL: 		String,
		personalWebsiteURL: String,
		events:				[{id: String}, {id: String}, ...],
		organizers:			[{id: String}, {id: String}, ...],
		subscribers:		[{id: String}, {id: String}, ...],
		interests: 			[{type: String}, {type: String}, ...]

	}
*/

/*
	event: {
		id: 			String,		
		creatorId: 		String,
		groupId: 		String,
		name: 			String,
		description: 	String,
		picture: 		String,
		creationDate: 	DateTime,
		startTimeDate: 	DateTime,
		endTimeDate: 	DateTime,
		location :		{street: String, city: String, state: String, zipcode: String},	
		maxVolunteers: 	Number,
		volunteers:		[{id: String}, {id: String}, ...],
		interests: 		[{type: String}, {type: String}, ...]
	}
*/