app.controller('ProjectController', ['$scope', 'ProjectService', '$routeParams', "Lightbox", function($scope, ProjectService, $routeParams, Lightbox) {
  $scope.title = 'Projects';
  console.log(Lightbox);
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.project.addImages, index);
  }
  
  var projectId = $routeParams.id || false;

  ProjectService.get(function(data) {
    console.log(data);
    data = data || {};
    $scope.projects = data;
    
    if (data.length === 1) {
      $scope.project = data[0];
    }
  }, projectId);  
 
  

  

  
}]);