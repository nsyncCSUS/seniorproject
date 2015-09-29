(function() {
	var app = angular.module('createGroupController', ['createGroupService']);

	app.controller('CreateGroupController', [ '$scope', '$location', 'CreateGroupService', function($scope, $location, CreateGroupService) {

		/***************************************************************************
		 * Variables (includes ones from scope too)
		 **************************************************************************/
		$scope.group = {};
		
		$scope.group.interests = [];
		
		$scope.group.organizersToAdd = [];
		$scope.searchResults = [];
		
		$scope.isPreviewing = false;
		$scope.isSearching = false;

		$scope.animalsSelected = "";
		$scope.educationSelected = "";
		$scope.environmentSelected = "";
		$scope.peopleSelected = "";
		$scope.recreationSelected = "";
		$scope.technologySelected = "";
		$scope.youthSelected = "";

		/***************************************************************************
		 * Initialize $scope.group
		 **************************************************************************/
		// Add in the user as an organizer
		var user = {
			id :			"anthonynguyen",
			firstName : 	"Anthony",
			lastName : 		"Nguyen",
			description : 	"Hi, I am a member of N.Sync().",
			picture : 		"//placekitten.com/g/1000/1000/",
			email : 		"anthonyn916@gmail.com",
			birthday : 		"1991-07-24",
			age : 			24,
			city : 			"Elk Grove",
			state : 		"CA",
			zipCode : 		95624,
			phoneNum : 		19162047928,
			googlePlus : 	"google.com",
			facebook : 		"facebook.com",
			linkedIn : 		"linkedin.com",
			twitter : 		"twitter.com",
			volunteeredTo : [],
			creatorOf : 	[],
			organizerOf : 	[],
			subscribedTo : 	[],
			interests : 	[{type: "Technology"}]
		};
		
		$scope.group.organizers = [];
		$scope.group.organizers.push(user);
		
		// Build an array for displaying organizers in a carousel
		buildOrganizers();
		// Build one for mobile view also
		buildOrganizersXS();

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
			angular.forEach($scope.group.organizersToAdd, function(organizer) {
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

		/* Builds the organizers list to be compatible with row based bootstrap carousel (XS version)
		 * group = {
		 * 			organizers: [{1}, {2}, {3}, ...]
		 * 			organizersBuiltXS: [
		 * 							{ organizers: [ {1},{2} ] }, // $first
		 * 							{ organizers: [ {3},{4} ] },
		 * 							{ organizers: [ {5},{6} ] },
		 * 							{ organizers: [ {7},{8} ] }
		 * 							]
		 * 			}
		 */
		function buildOrganizersXS() {
			// Split into 2 x Y arrays
			var currentRow = 0;
			var currentIndex = 0;
			$scope.group.organizersBuiltXS = [{organizers: []}];
			angular.forEach($scope.group.organizers, function(organizer) {
				// Add new row if the row is filled
				if (currentIndex === 2) {
					this.push({organizers: []});
					currentRow++;
					currentIndex = 0;
					this[currentRow].organizers.push(organizer);
					currentIndex++;
				}
				// Push an organizer to current working row
				else {
					this[currentRow].organizers.push(organizer);
					currentIndex++;
				}
			}, $scope.group.organizersBuiltXS); // Used as "this" above
			//console.log($scope.group.organizersBuiltXS);
			angular.forEach($scope.group.organizersToAdd, function(organizer) {
				// Add new row if the row is filled
				if (currentIndex === 2) {
					this.push({organizers: []});
					currentRow++;
					currentIndex = 0;
					this[currentRow].organizers.push(organizer);
					currentIndex++;
				}
				// Push an organizer to current working row
				else {
					this[currentRow].organizers.push(organizer);
					currentIndex++;
				}
			}, $scope.group.organizersBuiltXS); // Used as "this" above
			//console.log($scope.group.organizersBuiltXS);
		};	
		

		/***************************************************************************
		 * Get Functions
		 **************************************************************************/
		$scope.searchUsers = function() {
			$scope.searchResultsPristine = true;
			$scope.isSearching = true;
			// Get search results from server
			$scope.searchResults = [{
				id :			"huy",
				firstName : 	"Huy",
				lastName : 		"Le"
			},{
				id :			"kris",
				firstName : 	"Kristopher",
				lastName : 		"Tadlock",
				picture : 		"//placekitten.com/g/1001/1001/"
			},{
				id :			"vadzim",
				firstName : 	"Vadzim",
				lastName : 		"LN",
				picture : 		"//placekitten.com/g/1002/1002/"
			},{
				id :			"shane",
				firstName : 	"Shane",
				lastName : 		"Singh",
				picture : 		"//placekitten.com/g/1003/1003/"
			},{
				id :			"john",
				firstName : 	"John",
				lastName : 		"LN",
				picture : 		"//placekitten.com/g/1004/1004/"
			}
			];
			
			// If the user is already in Organizers to be added list, give the CSS style to that user
			angular.forEach($scope.group.organizersToAdd, function(currentOrganizerToAdd) {
				angular.forEach($scope.searchResults, function(currentSearchResult) {
					if (currentSearchResult.id === currentOrganizerToAdd.id)
						currentSearchResult.added = "added";
				});
			});
		}
		
		/***************************************************************************
		 * Posting Functions
		 **************************************************************************/
		$scope.createGroup = function() {
			// Send new group to server
			CreateGroupService.createGroup({groupData: $scope.group}, function(res) {
				$scope.savedSuccessMsg = res.data.msg;
			});
		}

		/***************************************************************************
		 * Adding/Removing Interests Function
		 **************************************************************************/
		$scope.addInterest = function (interest) {
			var hasInterest = false;
			// Variable for array to be rebuilt so that there are no empty elements
			var newInterests = [];
			// Rebuild interests array
			// Checks if the interest selected is in the interest's array
			angular.forEach($scope.group.interests, function(currentInterest, index) {
				console.log(currentInterest.type);
				// If in array, remove class to show that it is now unselected
				if (currentInterest.type === interest){
					console.log("removed " + interest);
					hasInterest = true;
					switch(interest) {
					case "Animals":
						$scope.animalsSelected = "";
						break;
					case "Education":
						$scope.educationSelected = "";
						break;
					case "Environment":
						$scope.environmentSelected = "";
						break;
					case "People":
						$scope.peopleSelected = "";
						break;
					case "Recreation":
						$scope.recreationSelected = "";
						break;
					case "Technology":
						$scope.technologySelected = "";
						break;
					case "Youth":
						$scope.youthSelected = "";
						break;
					}
				}
				// Otherwise, add to rebuilt array
				else {
					console.log(currentInterest);
					newInterests.push(currentInterest);
				}
			});
			// Add interest if it was not in array
			if (hasInterest === false){
				console.log("added " + interest);
				newInterests.push({type: interest});
				switch(interest) {
				case "Animals":
					$scope.animalsSelected = "selected";
					break;
				case "Education":
					$scope.educationSelected = "selected";
					break;
				case "Environment":
					$scope.environmentSelected = "selected";
					break;
				case "People":
					$scope.peopleSelected = "selected";
					break;
				case "Recreation":
					$scope.recreationSelected = "selected";
					break;
				case "Technology":
					$scope.technologySelected = "selected";
					break;
				case "Youth":
					$scope.youthSelected = "selected";
					break;
				}
			}
			// Set the new interest array
			$scope.group.interests = newInterests;
			console.log($scope.group.interests);
		}

		/***************************************************************************
		 * Adding/Removing Organizers Function
		 **************************************************************************/
		/*
		 * Adds an organizer to $scope.group.organizersToAdd array
		 */
		$scope.addOrganizer = function(index) {
			var alreadyAdded = false;
			// Checks if the organizers to be added array is empty or not
			if ($scope.group.organizersToAdd.length > 0){
				// Checks if user has already been added
				angular.forEach($scope.group.organizersToAdd, function(currentOrganizerToAdd) {
					// If user is already in the array, flag will be true
					if (currentOrganizerToAdd.id === $scope.searchResults[index].id){
						console.log(currentOrganizerToAdd + "already added");
						alreadyAdded = true;
					}
				});
			}
			// If not added yet, add to array + set class to show it has been added
			if (!alreadyAdded){
				$scope.group.organizersToAdd.push($scope.searchResults[index]);
				$scope.searchResultsPristine = false;
				$scope.searchResults[index].added = "added";
			}
			console.log($scope.group.organizersToAdd);
		}

		/*
		 * Removes an organizer from $scope.group.organizersToAdd array
		 */
		$scope.removeOrganizer = function(index) {
			// Variable for array to be rebuilt so that there are no empty elements
			var newOrganizersToAdd = [];
			// Rebuild $scope.group.organizersToAdd array
			// Goes through $scope.group.organizersToAdd array to remove "index"
			angular.forEach($scope.group.organizersToAdd, function(currentOrganizerToAdd) {
				// If the index to be removed is found
				//		- do not add to rebuilt array
				//		- remove class in search results that shows that it has been added if applicable
				if (currentOrganizerToAdd.id === $scope.group.organizersToAdd[index].id){
					console.log("removed " + currentOrganizerToAdd);
					angular.forEach($scope.searchResults, function(currentSearchResult) {
						if (currentSearchResult.id === currentOrganizerToAdd.id)
							currentSearchResult.added = "";
					});
				}
				// Otherwise, add organizer to be added to rebuilt array
				else {
					console.log(currentOrganizerToAdd);
					newOrganizersToAdd.push(currentOrganizerToAdd);
				}
			});
			// Sets the rebuilt array
			$scope.group.organizersToAdd = newOrganizersToAdd;
			console.log($scope.group.organizersToAdd);
		}

		/***************************************************************************
		 * Boolean Functions
		 **************************************************************************/
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
				else 
					return false;
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
				else 
					return false;
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
				else 
					return false;
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
				else 
					return false;
			case "searchedUser":
				if ($scope.searchResults != null && $scope.searchResults.length > 0){
					if ($scope.searchResults[index1].picture != null){
						if ($scope.searchResults[index1].picture.length > 0)
							return true;
						else
							return false;
					}
					else
						return false;
				}
				else 
					return false;
			case "organizerToAdd":
				if ($scope.group.organizersToAdd != null){
					if ($scope.group.organizersToAdd[index1].picture != null){
						if ($scope.group.organizersToAdd[index1].picture.length > 0)
							return true;
						else
							return false;
					}
					else
						return false;
				}
				else 
					return false;
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
		 * Checks if there are more than n organizers
		 */
		$scope.hasOrganizers = function(amount) {
			var total = 0;
			if ($scope.group.organizers != null){
				total += $scope.group.organizers.length;
			}
			if ($scope.group.organizersToAdd != null){
				total += $scope.group.organizersToAdd.length;
			}
			if (total > amount)
				return true;
			else
				return false;
		}
		
		$scope.getIsSearching = function() {
			return $scope.isSearching;
		}
		
		$scope.hasResults = function() {
			if ($scope.searchResults.length > 0)
				return true;
			else
				return false;
		}
		
		$scope.hasOrganizersToAdd = function() {
			if ($scope.group.organizersToAdd != null && $scope.group.organizersToAdd.length > 0)
				return true;
			else
				return false;
		}

		/***************************************************************************
		 * Previewing Functions
		 **************************************************************************/
		$scope.enablePreview = function() {
			$scope.isPreviewing = true;
			// Build an array for displaying organizers in a carousel
			buildOrganizers();
			// Build one for mobile view also
			buildOrganizersXS();
		}
		
		$scope.cancelPreview = function() {
			$scope.isPreviewing = false;
		}
		
		$scope.getIsPreviewing = function() {
			if ($scope.isPreviewing === true)
				return true;
			else
				return false;
		}

		/***************************************************************************
		 * MISC Functions
		 **************************************************************************/
		$scope.cancelCreateGroup = function() {
			$location.path("/home").replace;
		}
		
	} ]);

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
