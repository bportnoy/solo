'use strict';

angular.module('inviteMe.services', [])

.factory('RequestInvite', ['$http', function($http){
  return function (email){
    console.log('Initiating invitation request.');
    return $http.post('/api/requestinvite', {email: email})
      .success(function(data, status, headers, config){
        console.log('Invitation requested!');
      }).error(function(data, status, headers, config){
        console.log('Error requesting invitation.');
      });
  };
}]);