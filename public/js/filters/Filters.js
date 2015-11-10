(function() {

	var app = angular.module('app');

	/**
	 * Checks if an event has expired
	 *  - displays correctly in upcoming events or past events
	 */
	app.filter('checkExpired', function () {
		return function (events, expiredFlag) {
			if (events == null)
				return;
			
			var today = new Date().getTime();
			var out = [];
			var eventEndDate = "";
			for (var i = 0; i < events.length; i++){
				eventEndDate = new Date(events[i].endTimeDate).getTime();
				result = eventEndDate - today;
				
				if ((result <= 0) && expiredFlag){
					out.push(events[i]);
				}
				else if ((result > 0) && !expiredFlag){
					out.push(events[i]);
				}
			}
			return out;
		}
	});
	
})();


