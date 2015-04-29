angular.module('ContactCtrl', []).controller('ContactController', function($scope) {
  $scope.tagline = 'This is the contact page.';

  $scope.contact = {};

  $scope.send = function(isValid) {
  	//Send data

  	if (typeof $scope.contact.anti !== "undefined" && $scope.contact.anti !== null && $scope.contact.anti.length > 0)
  		return false;

  	if (isValid) {
  		alert('the form is valid!');
  	}
  };

});