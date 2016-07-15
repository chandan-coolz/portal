'use strict';

/**
 * @ngdoc function
 * @name currentPtojectApp.controller:MainModuleCtrl
 * @description
 * # MainModuleCtrl
 * Controller of the currentPtojectApp
 */
angular.module('currentPtojectApp')
  .controller('DashboardLeftMenuCtrl', function ($scope,$document,$rootScope,$timeout,$interval,sideMenu) {



$scope.show_tab_first_level_menu = false;


var isTabletSize = false;
var isMobileSize = false;





//new variable
$scope.showMenuHeading = false;

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







$scope.tab_heading_mouseOver = function(key) {

if(!$rootScope.showSideBar) {
	
	$scope.sideMenuHeadingKey["show_tab_"+key+"_slide_heading"] = true;

} 

} //angularjS_tab_heading_mouseOverend









$scope.tab_heading_mouseLeft = function(key) {


if(!$rootScope.showSideBar) {
    
	
	
$timeout(function() {
	   
	   if($scope.show_tab_first_level_menu){
	   	  
	   	 
	   	  $scope.sideMenuHeadingKey["show_tab_"+key+"_slide_heading"] = true;

	   }else {
        
        
          $scope.sideMenuHeadingKey["show_tab_"+key+"_slide_heading"] = false;
	   }
    }, 50);




} //if

} //angularjS_tab_heading_mouseLeft end




$scope.showFirstlevelSubMenu = function(){
	
	$scope.show_tab_first_level_menu = true;
}

$scope.hideFirstlevelSubMenu = function(key){

   $scope.sideMenuHeadingKey['show_tab_'+key+'_slide_heading'] = false; 
   $scope.show_tab_first_level_menu = false ;                                                                                                                                  
}








// screen change listener
$interval(function(){
var width =  document.documentElement.clientWidth;	

if(width < 440 &&  !$rootScope.showSideBar){
	$rootScope.showSideBar=true;
	isMobileSize = true;
	
}

if(width >= 440 &&  width <= 768  && $rootScope.showSideBar && isMobileSize ){
   $rootScope.showSideBar = false;
   isMobileSize = false;

  
}

if(width >= 440 && width <= 768  && $rootScope.showSideBar && !isMobileSize){
   $rootScope.showSideBar = false;
   isTabletSize = true;

  
}

if(width > 768 && !$rootScope.showSideBar && isTabletSize){
	$rootScope.showSideBar = true;
	isTabletSize = false;
	

}

if(width>=440){
	$rootScope.hideSideBar = false ;
}


}, 10);
















//fetch side menu from APi

$scope.sideMenu = {};  
$scope.menusKey = {};  // side menu unique key
$scope.sideMenuHeadingKey = {} //side menu heading unique key

sideMenu.getList().then(function(data){

$scope.sideMenu = data;

//create unique key to menus options


angular.forEach($scope.sideMenu,function(value,key){

 $scope.menusKey[value.menu] = false;
 $scope.sideMenuHeadingKey["show_tab_"+value.menu+"_slide_heading"] = false;


});
 


});













  });
