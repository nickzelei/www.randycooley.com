app.directive('projectMeta', function () {
	return {
		restrict: 'E',
		scope: {
			project: '='
		},
		replace: true,
		templateUrl: "views/templates/projectMeta.html",
		controller: function ($scope) {
		}
	};
});
