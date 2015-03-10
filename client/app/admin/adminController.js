'use strict';

angular.module('inviteMe')
  .controller('AdminController', ['$scope', 'FetchPending', 'SendInvites', function ($scope, FetchPending, SendInvites) {
    $scope.pending = [];
    FetchPending().then(function(results){
      $scope.pending = results.data;
      _.each($scope.pending,function(user){
        user.created_at = moment(parseInt(user.created_at)).format('MMMM Do YYYY, h:mm:ss a');
      });
    });
    console.log($scope.pending);
    $scope.inviteSelection = [];
    $scope.sendInvites = SendInvites;

    //TODO: check all in row

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

  }]);
