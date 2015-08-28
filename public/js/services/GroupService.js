(function() {
	var app = angular.module('groupService', []);

	app.service('GroupService', [ '$http', function($http) {
		
		this.getGroup = function(id){
			var url = "/groups/data/" + id;
			var group = {}
			$http.get(url).success(function(data) {
				group = data;
				console.log("recieved " + data + ". For " + url + ". " + group.name);
			});
			//return group;
			var group =
			{
				id : "id123",
				name : "N.Sync()",
				picture : "//placehold.it/500x500",
				creationDate : "2015-08-26T18:50:10.111Z",
				city : "Sacramento",
				state : "CA",
				zipCode : 95828,
				description : "Senior project group ftw!!!!!",
				googlePlusURL : "www.google.com",
				facebookURL : "https://facebook.com",
				linkedInURL : "https://linkedin.com",
				twitterURL : "https://twitter.com",
				eventList : [ {
					name : "event1"
				},{
					name : "event2"
				},{
					name : "event3"
				}
				],
				organizerList : [ {
					name : "org1"
				} ],
				subscriptionList : [ {
					name : "sub1"
				} ],
				interest : [ {
					type : "technology"
				}, ]
			};
			
			return group;
		}
		
	} ]);

})();
