'use strict';

// Declare app level module which depends on views, and components
var myFirstApp = angular.module('myApp', [
    'ngRoute',
    'phonecatServices',
    'phonecatFilters',
    'phonecatAnimations',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]);
myFirstApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/list'});
}]);
