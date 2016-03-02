'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'view2/list.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'MobilePhone',
      function($scope, MobilePhone) {
          $scope.phones = MobilePhone.query();
          $scope.orderProp = 'age';
      }
    ]);