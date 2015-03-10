'use strict';

angular.module('inviteMe.admin')
  .controller('AdminController', ['$scope', function ($scope) {
    $scope.pending = {};

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

  }]);
