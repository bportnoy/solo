'use strict';

angular.module('inviteMe')
  .controller('MainCtrl', ['$scope', 'RequestInvite', function ($scope, RequestInvite) {
    $scope.alerts = [];

    $scope.addAlert = function(alert) {
     $scope.alerts.push(alert);
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.requestInvite = function(){
      RequestInvite($scope.emailInput)
      .success(function(data, status, headers, config){
        $scope.emailInput = '';
        $scope.addAlert({
          type: 'success',
          msg: 'Thanks! We\'ll let you know when we have space in our beta.'
          });
        })
        .error(function(data, status, headers, config){
          console.log($scope.alerts);
          if (status === 409){
            $scope.addAlert({
              type: 'danger',
              msg: 'It looks like you already requested an invitation with that e-mail address.\n We\'ll be in touch as soon as we have room.'
            });
          } else {
              $scope.addAlert({
              type: 'danger',
              msg: 'Something went wrong, and it\'s our fault. Please try again later. You don\'t deserve this.'
              });
            }
        });
    };

  }]);
