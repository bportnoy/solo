'use strict';

angular.module('inviteMe', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'inviteMe.services'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });