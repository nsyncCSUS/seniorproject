(function() {
    var app = angular.module('groupsController', ['groupService', 'groupFactory']);

    app.controller('GroupsController', ['$scope', '$routeParams', '$window', 'GroupService', 'GroupFactory', function($scope, $routeParams, $window, GroupService, GroupFactory) {

		/***************************************************************************
		 * Variables (includes ones from scope too)
		 **************************************************************************/
		$scope.groupId = $routeParams.groupId;
		
		$scope.isEditing = false;
		$scope.currentDate = new Date();
		
		$scope.group = {};
		$scope.savedSuccessMsg = {};
		
		$scope.loaded = false;

		/***************************************************************************
		 * Get Group Information
		 **************************************************************************/
		// Gets the group data from server
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
            buildOrganizersXS();

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
