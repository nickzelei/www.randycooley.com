app.controller('ProjectController', ['$scope', 'ProjectService', function($scope, ProjectService) {
  $scope.tagline = 'This is the project page.';
  $scope.title = 'Projects';
  
  var projects = [];
  ProjectService.get(function(data) {
    console.log(data);
    projects.push(data[0]);
    $scope.projects = projects;

      var project2 = {
    id: 2,
    title: 'Project Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
    image: 'http://placehold.it/700x300',
    imagealt: 'Project Two',
    url: '/projects/2',
    createdDate: ''
  };
  
  //projects.push(project1);
  projects.push(project2);
  });  
 
  

  

  
}]);