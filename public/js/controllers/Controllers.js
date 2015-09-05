////////////////Main/////////////////////
app.controller('MainController', ['$scope', 'ProjectService', function($scope, ProjectService) {
  
  var projectId = false;
  
  ProjectService.get(function(data) {
    data = data || {};

    var slides = $scope.slides = [];
    
    if (data) {
      data.sort(function(a,b){ return new Date(b.createdDate) - new Date(a.createdDate); });
      angular.forEach(data, function(value, key) {
        slides.push(buildSlide(value.mainImage.url, value.mainImage.caption));
      });
    }
  }, projectId);
  
  $scope.slideInterval = 4000;  
  
  function buildSlide(image, caption) {
    var slide = {
      'image': image,
      'caption': caption
    }    
    return slide;
  };
}]);

////////////////Project/////////////////////
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

////////////////Contact/////////////////////
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

////////////////About/////////////////////
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