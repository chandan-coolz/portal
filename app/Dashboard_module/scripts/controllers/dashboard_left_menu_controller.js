'use strict';

/**
 * @ngdoc function
 * @name currentPtojectApp.controller:MainModuleCtrl
 * @description
 * # MainModuleCtrl
 * Controller of the currentPtojectApp
 */
angular.module('currentPtojectApp')
  .controller('DashboardLeftMenuCtrl', function ($scope,$document,$rootScope,$timeout,$interval) {


$scope.angularjSOptionsShow = false; // for desktop
$scope.jQueryOptionsShow = false; 
$scope.jQueryOptionsShow_datatablesOptionsShow = false;
$scope.show_tab_dashboard_slide_heading = false; //for tab
$scope.show_tab_angularjS_slide_heading = false;
$scope.show_tab_jQuery_slide_heading = false;
$scope.show_tab_user_slide_heading = false;
$scope.show_tab_task_todo_slide_heading = false;
$scope.show_tab_first_level_menu = false;
$scope.jQueryOptionsShow_datatablesOptionsShow_tab = false;
$scope.show_tab_second_level_menu = false;
var isTabletSize = false;
var isMobileSize = false;

var jqueryElement = angular.element(document.getElementById('jquery-secion-option'));
$scope.jQeryDatatablesOptionClicked = function() {

if($rootScope.showSideBar) {
 $scope.jQueryOptionsShow_datatablesOptionsShow = !$scope.jQueryOptionsShow_datatablesOptionsShow;
       if($scope.jQueryOptionsShow_datatablesOptionsShow){
          $document.scrollToElementAnimated(jqueryElement,0,1000);
         } 

}//1 if
}//scroll to jquery

$scope.jQueryOptionsClicked = function() {

if($rootScope.showSideBar) {
 $scope.jQueryOptionsShow = !$scope.jQueryOptionsShow
  if(!$scope.jQueryOptionsShow){
      $document.scrollTopAnimated(0, 1000);
   } //if

 } //1 if  
} //scroll to top




$scope.angularjS_tab_heading_mouseOver = function() {

if(!$rootScope.showSideBar) {
	$scope.show_tab_angularjS_slide_heading = true;

} 

} //angularjS_tab_heading_mouseOverend









$scope.angularjS_tab_heading_mouseLeft = function() {

if(!$rootScope.showSideBar) {
	
$timeout(function() {
	   
	   if($scope.show_tab_first_level_menu){
	   	  $scope.show_tab_angularjS_slide_heading = true ;

	   }else {
        
          $scope.show_tab_angularjS_slide_heading = false ;
	   }
    }, 50);




} //if

} //angularjS_tab_heading_mouseLeft end



//jQuery

$scope.jQuery_tab_heading_mouseOver = function() {

if(!$rootScope.showSideBar) {
	$scope.show_tab_jQuery_slide_heading = true;

} 

} //jQuery_tab_heading_mouseOverend


$scope.jQuery_tab_heading_mouseLeft = function() {

if(!$rootScope.showSideBar) {
	
$timeout(function() {
	   
	   if($scope.show_tab_first_level_menu){
	   	  $scope.show_tab_jQuery_slide_heading  = true ;


	   }else {
           
          $scope.show_tab_jQuery_slide_heading  = false ;
	   }
    }, 50);




} //if

} //jQuery_tab_heading_mouseLeft end



$scope.jQuery_datatablesOptionsShow_tab_heading_mouseOver = function() {

if(!$rootScope.showSideBar) {
	$scope.jQueryOptionsShow_datatablesOptionsShow_tab = true;

} 

} //jQuery_tab_heading_mouseleave

$scope.jQuery_datatablesOptionsShow_tab_heading_mouseLeave = function() {

if(!$rootScope.showSideBar) {

	$timeout(function() {
	   
	   if($scope.show_tab_second_level_menu){
	   	  	$scope.jQueryOptionsShow_datatablesOptionsShow_tab = true;


	   }else {
           
          	$scope.jQueryOptionsShow_datatablesOptionsShow_tab = false;
	   }
    }, 500);
	


} 

} //jQuery_tab_heading_mouseleave end



// screen change listener
$interval(function(){

if(screen.width < 440 &&  !$rootScope.showSideBar){
	$rootScope.showSideBar=true;
	isMobileSize = true;
	
}

if(screen.width >= 440 && screen.width <= 768  && $rootScope.showSideBar && isMobileSize ){
   $rootScope.showSideBar = false;
   isMobileSize = false;

  
}

if(screen.width >= 440 && screen.width <= 768  && $rootScope.showSideBar && !isMobileSize){
   $rootScope.showSideBar = false;
   isTabletSize = true;

  
}

if(screen.width > 768 && !$rootScope.showSideBar && isTabletSize){
	$rootScope.showSideBar = true;
	isTabletSize = false;
	

}

if(screen.width>=440){
	$rootScope.hideSideBar = false ;
}


}, 10);











//jQuery end
  });
