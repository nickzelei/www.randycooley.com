var app = angular.module('MyApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap', 'ProjectFactory']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })

    .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectController'
    })
    
    .when('/projects/:id/', {
        templateUrl: 'views/project.html',
        controller: 'ProjectController', reloadOnSearch: false})

    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    });

$locationProvider.html5Mode(true);

}]);