(function() {
    var app = angular.module('createGroupController', ['createGroupService']);

    app.controller('CreateGroupController', ['$scope', '$location', 'CreateGroupService', function($scope, $location, CreateGroupService) {

        /***************************************************************************
         * Variables (includes ones from scope too)
         **************************************************************************/
        $scope.group = {};

        $scope.group.interests = [];

        $scope.isPreviewing = false;

        $scope.animalsSelected = "";
        $scope.educationSelected = "";
        $scope.environmentSelected = "";
        $scope.peopleSelected = "";
        $scope.recreationSelected = "";
        $scope.technologySelected = "";
        $scope.youthSelected = "";


        /*
         * Used to check if a social media object exists
         */
        $scope.checkIfHas = function(type) {
            switch (type) {
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

        $scope.addInterest = function(interest) {
            var hasInterest = false;
            var newInterests = [];
            angular.forEach($scope.group.interests, function(currentInterest, index) {
                console.log(currentInterest.type);
                if (currentInterest.type === interest) {
                    console.log("removed " + interest);
                    hasInterest = true;
                    switch (interest) {
                        case "animals":
                            $scope.animalsSelected = "";
                            break;
                        case "education":
                            $scope.educationSelected = "";
                            break;
                        case "environment":
                            $scope.environmentSelected = "";
                            break;
                        case "people":
                            $scope.peopleSelected = "";
                            break;
                        case "recreation":
                            $scope.recreationSelected = "";
                            break;
                        case "technology":
                            $scope.technologySelected = "";
                            break;
                        case "youth":
                            $scope.youthSelected = "";
                            break;
                    }
                } else {
                    console.log(currentInterest);
                    newInterests.push(currentInterest);
                }
            });
            if (hasInterest === false) {
                console.log("added " + interest);
                newInterests.push({
                    type: interest
                });
                switch (interest) {
                    case "animals":
                        $scope.animalsSelected = "selected";
                        break;
                    case "education":
                        $scope.educationSelected = "selected";
                        break;
                    case "environment":
                        $scope.environmentSelected = "selected";
                        break;
                    case "people":
                        $scope.peopleSelected = "selected";
                        break;
                    case "recreation":
                        $scope.recreationSelected = "selected";
                        break;
                    case "technology":
                        $scope.technologySelected = "selected";
                        break;
                    case "youth":
                        $scope.youthSelected = "selected";
                        break;
                }
            }
            $scope.group.interests = newInterests;
            console.log($scope.group.interests);
        }

        $scope.cancelGroup = function() {

        }

        $scope.hasPicture = function() {
            if ($scope.group.picture != null && $scope.group.picture.length > 0)
                return true;
            else
                return false;
        }

        $scope.cancelCreateGroup = function() {
            $location.path("/home").replace;
        }

        /***************************************************************************
         * Posting Functions
         **************************************************************************/
        $scope.createGroup = function() {
            // Send new group to server
            CreateGroupService.createGroup({
                groupData: $scope.group
            }, function(res) {
                $scope.savedSuccessMsg = res.data.msg;
            });
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

    }]);

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