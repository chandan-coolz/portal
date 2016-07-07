'use strict';

/**
 * @ngdoc function
 * @name currentPtojectApp.controller:MainModuleCtrl
 * @description
 * # MainModuleCtrl
 * Controller of the currentPtojectApp
 */
angular.module('currentPtojectApp')
  .controller('DashboardHeaderCtrl', function ($scope,$rootScope,$timeout,Messages,Notification,Task) {
   
   
 $scope.isMessageItemsCollapsed = true;
 $scope.isTaskItemsCollapsed = true;
 $scope.isNotificationItemsCollapsed = true;
 $scope.isUserItemsCollapsed = true;
 $scope.showLogo = true;
 $scope.isMouseOverMenu = false;
 $rootScope.showSideBar = true;
 $rootScope.hideSideBar = true ;




$scope.hideMessageOptions = function(){

$timeout(function() {
	   if(!$scope.isMouseOverMenu){
	    $scope.isMessageItemsCollapsed = true;
        }
    }, 50);


} //hideMessageOptions


$scope.hideTaskOptions = function(){

$timeout(function() {
	   if(!$scope.isMouseOverMenu){
	    $scope.isTaskItemsCollapsed = true;
        }
    }, 50);


} //hideTaskOptions


$scope.hideNotificationOptions = function(){

$timeout(function() {
	   if(!$scope.isMouseOverMenu){
	    $scope.isNotificationItemsCollapsed = true;
        }
    }, 50);


} //hideNotificationOptions

$scope.hideUserOptions = function(){

$timeout(function() {
	   if(!$scope.isMouseOverMenu){
	    $scope.isUserItemsCollapsed = true;
        }
    }, 50);


} //hideNotificationOptions





$scope.toggleSideBar = function() {

$rootScope.showSideBar = !$rootScope.showSideBar;
$scope.showLogo = !$scope.showLogo;
}//toggleSideBar


$scope.toggle_mobile_SideBar =  function() {

    $rootScope.hideSideBar = !$rootScope.hideSideBar ;
}





//fetching messages details from API
$scope.messages = {};

Messages.getList().then(function(data){

$scope.messages = data;


});

//fetch notification details for the user from API
$scope.notificationIcons = {

 "users" : {
  
                    "icon" : "fa-users",
                    "color" : "#2980b9"
                    },

 "warning" : {
       
              "icon" : "fa-warning",
              "color" : "#FFA500"

             } ,

 "sale" : {
           
           "icon" : "fa-shopping-cart",
           "color" : "#2ecc71" 

         }  ,
 "user" : {
 
         "icon" : "fa-user",
         "color" : "#3498db"
         }                                      
 }


$scope.notification = {};

Notification.getList().then(function(data){

$scope.notification = data;
});


//fetch task detais for the user from API

$scope.task = {};

Task.getList().then(function(data){

$scope.task = data;

});



 });
