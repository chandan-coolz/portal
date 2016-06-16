'use strict';

/**
 * @ngdoc function
 * @name currentPtojectApp.controller:MainModuleCtrl
 * @description
 * # MainModuleCtrl
 * Controller of the currentPtojectApp
 */
angular.module('currentPtojectApp')
  .controller('DashboardLeftMenuCtrl', function ($scope,$document,$rootScope) {

$scope.angularjSOptionsShow = false;
$scope.jQueryOptionsShow = false;
$scope.jQueryOptionsShow_datatablesOptionsShow = false;
$scope.show_tab_dashboard_slide_heading = false;
$scope.show_tab_angularjS_slide_heading = false;
$scope.show_tab_jQuery_slide_heading = false;
$scope.show_tab_user_slide_heading = false;
$scope.show_tab_task_todo_slide_heading = false;


var jqueryElement = angular.element(document.getElementById('jquery-secion-option'));
$scope.jQeryDatatablesOptionClicked = function() {

 $scope.jQueryOptionsShow_datatablesOptionsShow = !$scope.jQueryOptionsShow_datatablesOptionsShow;
       if($scope.jQueryOptionsShow_datatablesOptionsShow){
          $document.scrollToElementAnimated(jqueryElement,0,1000);
         } 

}//scroll to jquery

$scope.jQueryOptionsClicked = function() {

 $scope.jQueryOptionsShow = !$scope.jQueryOptionsShow
  if(!$scope.jQueryOptionsShow){
      $document.scrollTopAnimated(0, 1000);
   } //if
} //scroll to top




  });
