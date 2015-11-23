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
  
  $scope.slideInterval = 3000;  
  
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
    } else {
        for (var i = 0; i < $scope.projects.length; i++) {
            if ($scope.projects[i].description.length > 150)
            $scope.projects[i].description = $scope.projects[i].description.substring(0, 150) + "..."
        }
    }
  }, projectId);  
}]);

////////////////Contact/////////////////////
app.controller('ContactController', ['$scope', '$http', function($scope, $http) {
  $scope.tagline = 'This is the contact page.';

  $scope.contact = {};

  $scope.send = function(isValid) {
  	//Send data
    var anti = $scope.contact.anti || false;
    if (anti)
      return  false;
    
  	if (isValid) {
      var phone = $scope.contact.phone || "";
      var lvblnk = $scope.contact.anti || "";
      var data = {
        "name": $scope.contact.name,
        "phone": phone,
        "email": $scope.contact.email,
        "message": $scope.contact.message,
        "lvblnk": lvblnk        
      }
//   		$http.post('/api/contactus/', data).then(function(res) {
//         $scope.contact.name = "";
//         $scope.contact.phone = "";
//         $scope.contact.email = "";
//         $scope.contact.message = "";
//         $scope.contactForm.$setPristine();
// 
//       });
  	}
  };
}]);

////////////////About/////////////////////
app.controller('AboutController', ['$scope', function($scope) {
  $scope.tagline = 'This is the about page.';
}]);