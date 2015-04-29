angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // nerds page that will use the NerdController
    .when('/nerds', {
        templateUrl: 'views/nerd.html',
        controller: 'NerdController'
    })

    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })

    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
    })

    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    });

$locationProvider.html5Mode(true);

}]);
