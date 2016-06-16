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
    'ngRoute','ui.bootstrap','duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'Dashboard_module/views/dashboard_module.html',
        controller: 'DashboardCtrl'
     
      })
     
      .otherwise({
        redirectTo: '/'
      });
  });
