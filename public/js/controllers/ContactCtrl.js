app.controller('ContactController', ['$scope', function($scope) {
  $scope.tagline = 'This is the contact page.';

  $scope.contact = {};

  $scope.send = function(isValid) {
  	//Send data

    if (!$scope.contact.anti)
      return  false;

  	if (isValid) {
  		alert('the form is valid!');
  	}
  };
}]);