(function() {
    var app = angular.module('homeController', ['homeService', 'homeFactory', 'userFactory']);


    app.controller('HomeController', ['$scope', 'HomeService', 'HomeFactory', 'UserFactory', function($scope, HomeService, HomeFactory, UserFactory) {

        /***************************************************************************
         * Variables (includes ones from scope too)
         **************************************************************************/
        UserFactory.getAUserByName('1').then(function(data){
            $scope.userObject = data.data[0];
            //console.log(data.data[0]);
        });
        
        $scope.event = {
               
       };
        $scope.event.startTimeDate = new Date('2015-03-01T00:00:00Z');
        $scope.event.endTimeDate = new Date('2015-03-01T00:00:00Z');
        $scope.isSearching = false; // Default
        $scope.currentTab = 'events';
        $scope.search = {
            "text" : '',
            "advanced": false,
            "type": 'Events',
            "animals": false,
            "education": false,
            "environment": false,
            "people": false,
            "recreation": false,
            "youth": false
        };

        $scope.category = 'Events';
        $scope.usersSearchResults;
        $scope.groupsSearchResults;
        $scope.eventsSearchResults;
        $scope.searchbox = '';
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
         *  - Search Users
         *  - Search Groups
         *  - Search Events
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

        /***********************************************************https://github.com/nsyncCSUS/seniorproject.git****************
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
            if ($scope.search.advanced === true){
                $scope.search.advanced = false;
            }
            else{
                $scope.search.advanced = true;
            }
        };

        $scope.toggleInterest = function(interest){
            if (interest === true){
                interest = false;
            }
            else{
                interest = true;
            }
        };

     // Disable weekend selection
     $scope.disabled = function(date, mode) {
       return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
     };

     $scope.dateOptions = {
       showWeeks: false,
       startingDay: 1
     };
     
     $scope.timeOptions = {
       readonlyInput: false,
       showMeridian: false
     };
     
     $scope.dateModeOptions = {
       minMode: 'year',
       maxMode: 'year'
     };
     
     $scope.openCalendar = function(e, date) {
         $scope.open[date] = true;
     };
     
     // watch date4 and date5 to calculate difference
     $scope.calculateWatch = $scope.$watch(function() {
       return $scope.dates;
     }, function() {
       if ($scope.event.startTime && $scope.event.endTime) {
         var diff = $scope.event.startTime.getTime() - $scope.event.endTime.getTime();
         $scope.dayRange = Math.round(Math.abs(diff/(1000*60*60*24)))
       } else {
         $scope.dayRange = 'n/a';
       }
     }, true);
     
     $scope.$on('$destroy', function() {
       $scope.calculateWatch();
     });

    }]);

})();