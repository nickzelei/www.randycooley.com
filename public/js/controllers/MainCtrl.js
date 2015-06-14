app.controller('MainController', ['$scope', function($scope) {
  
  $scope.slideInterval = 5000;
  
  var slides = $scope.slides = [];
  
  var slide1 = buildSlide("http://placehold.it/1900x1080&text=Slide%20One", "Slide One");
  var slide2 = buildSlide("http://placehold.it/1900x1080&text=Slide%20Two", "Slide Two");
  var slide3 = buildSlide("http://placehold.it/1900x1080&text=Slide%20Three", "Slide Three");
  
  slides.push(slide1);
  slides.push(slide2);
  slides.push(slide3);
  
  
  function buildSlide(image, caption) {
    var slide = {
      'image': image,
      'caption': caption
    }
    
    return slide;
  };
}]);
