'use strict';

angular.module('inviteMe')
  .controller('AdminController', ['$scope', 'FetchPending', function ($scope, FetchPending, checklistmodel) {
    $scope.pending = [{name:'bradley',test:'hello', id: 0},{name:'tess', test: 'failed', id: 3}];
    $scope.inviteSelection = [];

    //TODO: check all in row
    
    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

  }]);
