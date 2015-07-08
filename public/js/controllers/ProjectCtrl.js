app.controller('ProjectController', ['$scope', 'ProjectService', '$routeParams', function($scope, ProjectService, $routeParams) {
  $scope.title = 'Projects';
  
  var projectId = $routeParams.param1 || false;

  ProjectService.get(function(data) {
    console.log(data);
    data = data || {};
    $scope.projects = data;
    
    if (data.length === 1) {
      $scope.project = data[0];
    }
  }, projectId);  
 
  

  

  
}]);