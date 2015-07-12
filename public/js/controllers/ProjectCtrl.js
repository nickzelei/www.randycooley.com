app.controller('ProjectController', ['$scope', 'ProjectService', '$routeParams', "Lightbox", function($scope, ProjectService, $routeParams, Lightbox) {
  $scope.title = 'Projects';
  console.log(Lightbox);
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.project.images, index);
  }
  
  var projectId = $routeParams.param1 || false;

  ProjectService.get(function(data) {
    console.log(data);
    data = data || {};
    $scope.projects = data;
    
    if (data.length === 1) {
      $scope.project = data[0];
      
      $scope.project.mainImage = $scope.project.images.shift();
      
      
      
      //$scope.project.images.push({"url":$scope.project.image});
    }
  }, projectId);  
 
  

  

  
}]);