'use strict';

angular.module('inviteMe', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'inviteMe.services',
  'checklist-model'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupController'
      })
      .when('/admin',{
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });