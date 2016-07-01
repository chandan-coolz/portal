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
        templateUrl: 'Login_module/views/login.html',
        controller: 'loginCtrl'
     
      })
      .when('/forget-Password', {
        templateUrl: 'Login_module/views/forget_password.html',
        controller: 'forgetPasswordCtrl'
     
      })
      .when('/dashboard',{

       templateUrl: 'Dashboard_module/views/dashboard_module.html',
        controller: 'DashboardCtrl'


      })
     
      .otherwise({
        redirectTo: '/'
      });
  });
