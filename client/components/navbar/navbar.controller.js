'use strict';

angular.module('inviteMe')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    // {
    //   'title': 'Home',
    //   'link': '/'
    // },
    {
      'title': 'Sign Up',
      'link': '/signup'
    },
    {
      'title': 'Get an Invite',
      'link': '/invite'
    },
    {
      'title': 'Protected',
      'link': '/protected'
    },
    {
      'title': 'Admin',
      'link': '/admin'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });