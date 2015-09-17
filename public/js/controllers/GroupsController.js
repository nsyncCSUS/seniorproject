(function() {
    var app = angular.module('groupsController', ['groupService', 'groupFactory']);

    app.controller('GroupsController', ['$scope', '$routeParams', '$window', 'GroupService', 'GroupFactory', function($scope, $routeParams, $window, GroupService, GroupFactory) {

		/***************************************************************************
		 * Variables (includes ones from scope too)
		 **************************************************************************/
		$scope.groupId = $routeParams.groupId;
		
		$scope.isEditing = false;
		$scope.currentDate = new Date();
		
		$scope.group =  
		{
				id : "nsync",
				name : "N.Sync()",
				picture : "//placekitten.com/g/500/500/",
				creationDate : "2015-08-26T18:50:10.111Z",
				city : "Sacramento",
				state : "CA",
				zipCode : 95828,
				description : "Senior project group ftw!!!!!",
				googlePlusURL : "www.google.com",
				facebookURL : "https://facebook.com",
				linkedInURL : "https://linkedin.com",
				twitterURL : "https://twitter.com",
				events : [ {
					id : "event1",
					name : "event1",
					picture : "//placekitten.com/g/501/500/",
					startTimeDate : "2015-08-26T18:50:10.111Z",
					endTimeDate : "2015-08-27T18:50:10.111Z",
					maxVolunteers : 50,
					interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}],
					volunteers: [{id: "v1", firstName: "Kitten 1", lastName: "1"}, 
					             {id: "v2", firstName: "Kitten 2", lastName: "1", picture: "//placekitten.com/g/250/251"}, 
					             {id: "v3", firstName: "Kitten 3", lastName: "1"}, 
					             {id: "v4", firstName: "Kitten 4", lastName: "1", picture: "//placekitten.com/g/250/253"}, 
					             {id: "v5", firstName: "Kitten 5", lastName: "1", picture: "//placekitten.com/g/250/254"}, 
					             {id: "v6", firstName: "Kitten 6", lastName: "1", picture: "//placekitten.com/g/250/255"}, 
					             {id: "v7", firstName: "Kitten 7", lastName: "1", picture: "//placekitten.com/g/250/256"}, 
					             {id: "v8", firstName: "Kitten 8", lastName: "1", picture: "//placekitten.com/g/250/257"}, 
					             {id: "v9", firstName: "Kitten 9", lastName: "1", picture: "//placekitten.com/g/250/258"}, 
					             {id: "v10", firstName: "Kitten 10", lastName: "1", picture: "//placekitten.com/g/250/259"}, 
					             {id: "v11", firstName: "Kitten 11", lastName: "1", picture: "//placekitten.com/g/250/260"}]
				},
				{
					id : "event2",
					name : "event2",
					picture : "//placekitten.com/g/503/500/",
					startTimeDate : "2015-08-28T18:50:10.111Z",
					endTimeDate : "2015-08-29T18:50:10.111Z",
					maxVolunteers : 50,
					interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}],
					volunteers: [{id: "v1", firstName: "Kitten 1", lastName: "1", picture: "//placekitten.com/g/251/250"}, 
					             {id: "v2", firstName: "Kitten 2", lastName: "1", picture: "//placekitten.com/g/251/251"}, 
					             {id: "v3", firstName: "Kitten 3", lastName: "1", picture: "//placekitten.com/g/251/252"}, 
					             {id: "v4", firstName: "Kitten 4", lastName: "1", picture: "//placekitten.com/g/251/253"}, 
					             {id: "v5", firstName: "Kitten 5", lastName: "1"}, 
					             {id: "v6", firstName: "Kitten 6", lastName: "1", picture: "//placekitten.com/g/251/255"}, 
					             {id: "v7", firstName: "Kitten 7", lastName: "1", picture: "//placekitten.com/g/251/256"}, 
					             {id: "v8", firstName: "Kitten 8", lastName: "1", picture: "//placekitten.com/g/251/257"}, 
					             {id: "v9", firstName: "Kitten 9", lastName: "1", picture: "//placekitten.com/g/251/258"}, 
					             {id: "v10", firstName: "Kitten 10", lastName: "1"}, 
					             {id: "v11", firstName: "Kitten 11", lastName: "1", picture: "//placekitten.com/g/251/260"}, 
					             {id: "v12", firstName: "Kitten 12", lastName: "1", picture: "//placekitten.com/g/251/261"}, 
					             {id: "v13", firstName: "Kitten 13", lastName: "1", picture: "//placekitten.com/g/251/262"}, 
					             {id: "v14", firstName: "Kitten 14", lastName: "1", picture: "//placekitten.com/g/251/263"}, 
					             {id: "v15", firstName: "Kitten 15", lastName: "1", picture: "//placekitten.com/g/251/264"}, 
					             {id: "v16", firstName: "Kitten 16", lastName: "1", picture: "//placekitten.com/g/251/265"}]
				}
				],
				organizers : [{id : "org1", firstName : "org1", lastName: "1"},
				              {id : "org2", firstName : "org2", lastName: "1", picture : "//placekitten.com/g/351/350/"},
				              {id : "org3", firstName : "org3", lastName: "1", picture : "//placekitten.com/g/352/350/"},
				              {id : "org4", firstName : "org4", lastName: "1", picture : "//placekitten.com/g/353/350/"},
				              {id : "org5", firstName : "org5", lastName: "1"},
				              {id : "org6", firstName : "org6", lastName: "1", picture : "//placekitten.com/g/355/350/"}],
				subscribers : [{id : "sub1", firstName : "sub1", lastName: "1", picture : "//placekitten.com/g/350/355/"},
				               {id : "sub2", firstName : "sub2", lastName: "1", picture : "//placekitten.com/g/351/355/"},
				               {id : "sub3", firstName : "sub3", lastName: "1", picture : "//placekitten.com/g/352/355/"},
				               {id : "sub4", firstName : "sub4", lastName: "1"},
				               {id : "sub5", firstName : "sub5", lastName: "1", picture : "//placekitten.com/g/354/355/"},
				               {id : "sub6", firstName : "sub6", lastName: "1", picture : "//placekitten.com/g/355/355/"},
				               {id : "sub7", firstName : "sub7", lastName: "1", picture : "//placekitten.com/g/350/355/"},
				               {id : "sub8", firstName : "sub8", lastName: "1", picture : "//placekitten.com/g/356/355/"},
				               {id : "sub9", firstName : "sub9", lastName: "1"},
				               {id : "sub10", firstName : "sub10", lastName: "1", picture : "//placekitten.com/g/358/355/"}],
				interests : [{type: "Animals"}, {type: "Education"}, {type: "Environment"}, {type: "People"}, {type: "Recreation"}, {type: "Technology"}, {type: "Youth"}]
		};
		$scope.savedSuccessMsg = {};
		
		$scope.loaded = false;

		/***************************************************************************
		 * Get Group Information
		 **************************************************************************/
		// Gets the group data from server
		/*
		GroupService.getGroup({groupId: $routeParams.groupId}, function(res) {
			$scope.group = res.data;
			
			// Get Organizers by ID
			
			// Build an array for displaying organizers in a carousel
			buildOrganizers();
			// Build one for mobile view also
			buildOrganizersXS();
			// Get Subscribers by ID
			$scope.loaded = true;
		});
		*/

		// Build an array for displaying organizers in a carousel
		buildOrganizers();
		// Build one for mobile view also
		//buildOrganizersXS();
		// Get Subscribers by ID
		$scope.loaded = true;
		/***************************************************************************
		 * Building Functions
		 **************************************************************************/
		/* Builds the organizers list to be compatible with row based bootstrap carousel (SM-MD-LG version)
		 * group = {
		 * 			organizers: [{1}, {2}, {3}, ...]
		 * 			organizersBuilt: [
		 * 							{ organizers: [ {1},{2},{3},{4} ] }, // $first
		 * 							{ organizers: [ {5},{6},{7},{8} ] },
		 * 							{ organizers: [ {9},{10},{11},{12} ] },
		 * 							{ organizers: [ {13},{14},{15},{16} ] }
		 * 							]
		 * 			}
		 */
		function buildOrganizers() {
			// Split into 4 x Y arrays
			var currentRow = 0;
			var currentIndex = 0;
			$scope.group.organizersBuilt = [{organizers: []}];
			angular.forEach($scope.group.organizers, function(organizer) {
				// Add new row if the row is filled
				if (currentIndex === 4) {
					this.push({organizers: []});
					currentRow++;
					currentIndex = 0;
					this[currentRow].organizers.push(organizer);
					currentIndex++;
				}
				else {
					this[currentRow].organizers.push(organizer);
					currentIndex++;
				}
			}, $scope.group.organizersBuilt); // Used as "this" above
			//console.log($scope.group.organizersBuilt);
		};

        $scope.group = {};
        $scope.savedSuccessMsg = {};



		

		/***********************************************************************
		 * Boolean Functions
		 **********************************************************************/
		/*
		 * Checks if the gorup has a picture, the view will display a default
		 * picture if no picture is found.
		 */
		$scope.hasPicture = function(type1, index1, type2, index2) {
			switch(type1){
			case "group":
				if ($scope.group.picture != null){
					if ($scope.group.picture.length > 0)
						return true;
					else
						return false;
					}
				else{
					if ($scope.loaded == false)
						return true;
					else
						return false;
				}
			case "organizer":
				if ($scope.group.organizersBuilt != null){
					if ($scope.group.organizersBuilt[index1].organizers[index2].picture != null){
						if ($scope.group.organizersBuilt[index1].organizers[index2].picture.length > 0)
							return true;
						else
							return false;
						}
					else
						return false;
				}
			case "organizerXS":
				if ($scope.group.organizersBuiltXS != null){
					if ($scope.group.organizersBuiltXS[index1].organizers[index2].picture != null){
						if ($scope.group.organizersBuiltXS[index1].organizers[index2].picture.length > 0)
							return true;
						else
							return false;
						}
					else
						return false;
				}
			case "subscriber":
				if ($scope.group.subscribers != null){
					if ($scope.group.subscribers[index1].picture != null){
						if ($scope.group.subscribers[index1].picture.length > 0)
							return true;
						else
							return false;
						}
					else
						return false;
				}
			case "event":
				if ($scope.group.events != null){
					if (type2 != null) {
						switch(type2){
						case "volunteer":
							if ($scope.group.events[index1].volunteers[index2].picture != null) {
								if ($scope.group.events[index1].volunteers[index2].picture.length > 0) 
									return true;
								else
									return false;
							}
						}
					}
					else{
						if ($scope.group.events[index1].picture != null){
							if ($scope.group.events[index1].picture.length > 0)
								return true;
							else
								return false;
							}
						else
							return false;
					}
				}
			}
		}
		
		/*
		 * Used to check if a social media object exists
		 */
		$scope.checkIfHas = function(type) {
			switch(type){
			case "googlePlus":
				if ($scope.group.googlePlusURL != null && $scope.group.googlePlusURL.length > 0)
					return true;
				break;
			case "facebook":
				if ($scope.group.facebookURL != null && $scope.group.facebookURL.length > 0)
					return true;
				break;
			case "twitter":
				if ($scope.group.twitterURL != null && $scope.group.twitterURL.length > 0)
					return true;
				break;
			case "linkedIn":
				if ($scope.group.linkedInURL != null && $scope.group.linkedInURL.length > 0)
					return true;
				break;
			case "website":
				if ($scope.group.personalWebsiteURL != null && $scope.group.personalWebsiteURL.length > 0)
					return true;
				break;
			}
			
			return false;
		}
		
		/*
		 * Checks if there are more than 1 upcoming events, the view will display
		 * arrows to move across events if that is the case.
		 */
		$scope.hasMultipleEvents = function() {
			if ($scope.group.events != null){
				if ($scope.group.events.length >= 2)
					return true;
				else
					return false;
			}
			else
				return false;
		}


            // Build an array for displaying organizers in a carousel
            buildOrganizers();
            // Build one for mobile view also
            //buildOrganizersXS();

            // Get Subscribers by ID

		$scope.submitEdit = function() {
			$scope.isEditing = false;
			$scope.backupGroup = {};
			// Send changes to server
			GroupService.saveGroup({groupId: $routeParams.groupId, groupData: $scope.group}, function(res) {
				$scope.savedSuccessMsg = res.data.msg;
			});
			// Keep changes made
		}

		/***************************************************************************
		 * Subscribe Button
		 **************************************************************************/
		$scope.subscribe = function() {
			
		}
		
		/***************************************************************************
		 * Admin Testing
		 **************************************************************************/
		$scope.isAdmin = false;
		$scope.toggleAdmin = function() {
			$scope.isAdmin = !$scope.isAdmin;
		}

		
		/***************************************************************************
		 * MISC Functions
		 **************************************************************************/
		/*
		 * Opens an external link
		 */
		$scope.goTo = function(url) {
			if (url.indexOf("//") > -1)
				$window.open(url, '_blank');
			else{
				var validURL = "//" + url;
				$window.open(validURL, '_blank');
			}
				
		}
		
	} ]);

})();

/*
	info: {
		id : 				String,
		groupName : 		String,
		picture : 			String,
		creationDate : 		String,
			//city : 			String,
			//state : 			String,
			//zipCode : 		Number,
		description : 		String,
		googlePlusURL : 	String,
		facebookURL : 		String,
		linkInURL : 		String,
		twitterURL: 		String,
		personalWebsiteURL: String,
		events:			[{id: String}, {id: String}, ...],
		organizers:		[{id: String}, {id: String}, ...],
		subscribers:		[{id: String}, {id: String}, ...],
		interests: 	[{type: String}, {type: String}, ...]

	}
*/
