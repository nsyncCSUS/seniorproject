(function() {
    var app = angular.module('createEventController', ['createEventService']);

    app.controller('CreateEventController', ['$scope', 'CreateEventService', function($scope, CreateEventService) {
        
        $scope.event = {
                
        };
      $scope.event.startTime = new Date('2015-03-01T00:00:00Z');
      $scope.event.endTime = new Date('2015-03-01T00:00:00Z');

      console.log($scope.event);
      $scope.hstep = 1;
      $scope.mstep = 15;

	  //DateTime Picker stuff
  
      var in10Days = new Date();
      in10Days.setDate(in10Days.getDate() + 10);
      
	  /*
      $scope.dates = {
        date1: new Date('2015-03-01T00:00:00Z'),
        date2: new Date('2015-03-01T12:30:00Z'),
        date3: new Date(),
        date4: new Date(),
        date5: in10Days,
        date6: new Date(),
        date7: new Date(),
        date8: new Date()
      };*/
      
      $scope.open = {
        startTime: false,
        endTime: false,
      };
	  
	  $scope.timediff = function(start, end){
		//return moment.utc(moment(end).diff(moment(start))).format("mm")
		return moment.utc(moment(end).diff(moment(start)))
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
      /*
      $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
      };

      $scope.ismeridian = true;
      $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
      };

      $scope.update = function() {
        var d = new Date();
        d.setHours( 14 );
        d.setMinutes( 0 );
        $scope.mytime = d;
      };

      
      $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.mytime);
      };

      $scope.clear = function() {
        $scope.mytime = null;
      };*/
    }]);

})();

/*
    user: {
        firstName :     String,
        middleName :     String,
        lastName :         String,
        description :     String,
        picture:        String,
        email :         String,
        birthday :         Date,
        age :             Number,
        location :        {city: String, state: String, zipcode: String},    
        phoneNum :         Number,
        googlePlus :     String,
        facebook :         String,
        linkedIn :         String,
        twitter :         String,
        volunteeredTo : [{id: String}, {id: String}, ...],
        creatorOf :     [{id: String}, {id: String}, ...],
        organizerOf :     [{id: String}, {id: String}, ...],
        subscribedTo :     [{id: String}, {id: String}, ...],
        interests :     [{type: String}, {type: String}, ...]
    }
*/

/*
    group: {
        id :                 String,
        name :                 String,
        picture :             String,
        creationDate :         String,
        location :            [{city: String, state: String, zipcode: String}, ...],
        description :         String,
        googlePlusURL :     String,
        facebookURL :         String,
        linkInURL :         String,
        twitterURL:         String,
        personalWebsiteURL: String,
        events:                [{id: String}, {id: String}, ...],
        organizers:            [{id: String}, {id: String}, ...],
        subscribers:        [{id: String}, {id: String}, ...],
        interests:             [{type: String}, {type: String}, ...]

    }
*/

/*
    event: {
        id:             String,        
        creatorId:         String,
        groupId:         String,
        name:             String,
        description:     String,
        picture:         String,
        creationDate:     DateTime,
        startTimeDate:     DateTime,
        endTimeDate:     DateTime,
        location :        {street: String, city: String, state: String, zipcode: String},    
        maxVolunteers:     Number,
        volunteers:        [{id: String}, {id: String}, ...],
        interests:         [{type: String}, {type: String}, ...]
    }
*/