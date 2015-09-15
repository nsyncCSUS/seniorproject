(function() {
	var app = angular.module('createGroupController', ['createGroupService']);

	app.controller('CreateGroupController', [ '$scope', '$location', 'CreateGroupService', function($scope, $location, CreateGroupService) {

		/***************************************************************************
		 * Variables (includes ones from scope too)
		 **************************************************************************/
		$scope.group = {};
		
		$scope.group.interests = [];
		
		$scope.group.organizersToAdd = [];
		
		$scope.isPreviewing = false;

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
		};		
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
			var newInterests = [];
			angular.forEach($scope.group.interests, function(currentInterest, index) {
				console.log(currentInterest.type);
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
				else {
					console.log(currentInterest);
					newInterests.push(currentInterest);
				}
			});
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
			$scope.group.interests = newInterests;
			console.log($scope.group.interests);
		}

		/***************************************************************************
		 * Adding/Removing Organizers Function
		 **************************************************************************/
		$scope.addOrganizer = function() {
			
		}
		
		$scope.removeOrganizer = function() {
			
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
		
		$scope.hasOrganizers = function() {
			return true;
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
	group: {
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
