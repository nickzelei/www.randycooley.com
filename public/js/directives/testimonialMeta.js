app.directive('testimonialMeta', function() {
	return {
		restrict: 'E',
		scope: {
			testimonial: '='
		},
		replace: true,
		templateUrl: "views/templates/testimonialMeta.html",
		controller: function($scope) {
		}
	};
});