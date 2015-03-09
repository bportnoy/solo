'use strict';

angular.module('inviteMe')
  .controller('MainCtrl', ['$scope', 'RequestInvite', function ($scope, RequestInvite) {
    RequestInvite('b@b.com');

  }]);
