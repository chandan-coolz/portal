'use strict';

/**
 * @ngdoc overview
 * @name currentPtojectApp
 * @description
 * # currentPtojectApp
 *
 * Main module of the application.
 */
angular
  .module('currentPtojectApp', [
    'ngRoute','ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'Dashboard_module/views/header/header.html',
        controller: 'DashboardCtrl'
     
      })
     
      .otherwise({
        redirectTo: '/'
      });
  });
