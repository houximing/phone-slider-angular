'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones/:phoneId', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$routeParams', 'MobilePhone',
      function($scope, $routeParams, MobilePhone) {
          $scope.phone = MobilePhone.get({phoneId: $routeParams.phoneId}, function(phone) {
              $scope.mainImageUrl = phone.images[0];
          });

          $scope.setImage = function(imageUrl) {
              $scope.mainImageUrl = imageUrl;
          };
      }
    ]);