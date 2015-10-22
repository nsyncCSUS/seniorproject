(function() {
    var app = angular.module('homeController', ['homeService', 'homeFactory']);


    app.controller('HomeController', ['$scope', 'HomeService', 'HomeFactory', function($scope, HomeService, HomeFactory) {

        /***************************************************************************
         * Variables (includes ones from scope too)
         **************************************************************************/
        $scope.isSearching = false; // Default
        $scope.currentTab = 'events';

        $scope.search;
        $scope.category = 'Events';
        $scope.searchtext;
        $scope.usersSearchResults;
        $scope.groupsSearchResults;
        $scope.eventsSearchResults;
        $scope.searchbox = '';
        $scope.advancedSearchToggle = false;
        $scope.descrip = "center sodales malesuada accumsan vel, condimentum eget eros. Mauris consectetur nisi in ex pharetra commodo. Nullam aliquam velit sem, nec molestie risus eleifend ac. In fringilla, nisl ac gravida convallis, turpis eros accumsan urna, sed molestie tortor libero sit amet lacus. Nulla porttitor euismod purus, ut hendrerit leo vehicula sed. Aenean ad";

        $scope.events = [{
        EventName: "American River Cleanup!",
        
        Group: {
            GroupName:"Concerned Citizens for Rivers",
        },
        
        Description: $scope.descrip,
        picture: "event stub 1",
        CreationDate: "2015-08-26T18:50:10.111Z",
        StartTimeDate: "2015-08-26T18:50:10.111Z",
        EndTimeDate: "2015-08-26T18:50:10.111Z",
        Address: "1234 Fake Street",
        City: "Sacramento",
        State: "CA",
        Zipcode: "95621",
        
        VolunteerList: [{
        	Name: "abc"
        },
        {
        	Name: "abc"
        }],
        
        CreationUser: {
        },
        
        MaxVolunteers: 200,
        Interests: ['environment', 'people', 'youth'] 
        },
        {
       	EventName: "American River Cleanup!",
        
        Group: {
            GroupName:"Concerned Citizens for Rivers",
        },
        
        Description: $scope.descrip,
        picture: "event stub 2",    
        CreationDate: "2015-08-26T18:50:10.111Z",
        StartTimeDate: "2015-08-26T18:50:10.111Z",
        EndTimeDate: "2015-08-26T18:50:10.111Z",
        Address: "1234 Fake Street",
        City: "Sacramento",
        State: "CA",
        Zipcode: "95621",
        
        VolunteerList: [{
        }],
        
        CreationUser: {
        },
        
        MaxVolunteers: 200,
        Interests: ['environment', 'people', 'youth'] 
        }, 
        {
       	EventName: "American River Cleanup!",
        
        Group: {
            GroupName:"Concerned Citizens for Rivers",
        },
        
        Description: $scope.descrip,
        picture: "event stub 1",
        CreationDate: "2015-08-26T18:50:10.111Z",
        StartTimeDate: "2015-08-26T18:50:10.111Z",
        EndTimeDate: "2015-08-26T18:50:10.111Z",
        Address: "1234 Fake Street",
        City: "Sacramento",
        State: "CA",
        Zipcode: "95621",
        
        VolunteerList: [{
        }],
        
        CreationUser: {
        },
        
        MaxVolunteers: 200,
        Interests: ['environment', 'people', 'youth'] 
    	},
    	{
    	 EventName: "American River Cleanup!",
        
        Group: {
            GroupName:"Concerned Citizens for Rivers",
        },
        
        Description: $scope.descrip,
        picture: "event stub 2",
        CreationDate: "2015-08-26T18:50:10.111Z",
        StartTimeDate: "2015-08-26T18:50:10.111Z",
        EndTimeDate: "2015-08-26T18:50:10.111Z",
        Address: "1234 Fake Street",
        City: "Sacramento",
        State: "CA",
        Zipcode: "95621",
        
        VolunteerList: [{
        }],
        
        CreationUser: {
        },
        
        MaxVolunteers: 200,
        Interests: ['environment', 'people', 'youth']
    }];

        /***************************************************************************
         * Initialize the search for users, groups, events based on keywords
         * 	- Search Users
         * 	- Search Groups
         * 	- Search Events
         **************************************************************************/
        $scope.search = function(searchbox) {
            if (searchbox.length > 0) {
                $scope.isSearching = true;

                $scope.search.text = searchbox;
                //$scope.searchbox = '';
                $scope.currentTab = 'events';

                // Get Events
                //$scope.eventsSearchResults = HomeService.getEventSearchResults();
                // Get users
 //               $scope.usersSearchResults = HomeService.getUserSearchResults();
                // Get Groups
//                $scope.groupsSearchResults = HomeService.getGroupSearchResults();
            }
        };

        $scope.getSearchBox = function(){
        	if (typeof searchbox !== 'undefined'){
        		return searchbox;
        	}
        	else{
        		return '';
        	}
        };

        /***************************************************************************
         * Functions that controls the view for searching or not search
         **************************************************************************/
        $scope.searching = function() {
            if ($scope.isSearching == true)
                return true;
            else
                return false;
        };
        $scope.stopSearching = function() {
            $scope.isSearching = false;
        };

        /***************************************************************************
         * Functions that controls tabs for searching
         **************************************************************************/
        $scope.setCurrentTab = function(category) {
            $scope.currentTab = category;
        };

        $scope.getSearchType = function(category) {
            if ($scope.category === category)
                return true;
            else
                return false;
        };

        $scope.toggleAdvancedSearch = function(){
        	if ($scope.advancedSearch === true){
        		$scope.advancedSearch = false;
        	}
        	else{
        		$scope.advancedSearch = true;
        	}
        };

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
