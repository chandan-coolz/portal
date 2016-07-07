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
    'ngRoute','ui.bootstrap','duScroll','restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {
   
   RestangularProvider.setBaseUrl('http://localhost:3000');

  

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
  })
  
  .factory('LoginRestangular', function(Restangular){
  
   return Restangular.withConfig(function(RestangularConfig){
   
  

    RestangularConfig.setRestangularFields({
    id:"id"
   }) ;

    //RestangularConfig.setFullResponse(true);

   });

  })
  

.factory("Login",function(LoginRestangular){ //servie for login

  return LoginRestangular.service('login');
})

.factory("Messages",function(Restangular){ //service for message

return Restangular.service('Messages');

})
.factory("Notification", function(Restangular){ //service for Notification

return Restangular.service('Notification');

})
.factory("Task", function(Restangular){ //service for task

return Restangular.service("Task");
})
.factory("sideMenu", function(Restangular){ //for side menu

return Restangular.service("side-menu");
});

