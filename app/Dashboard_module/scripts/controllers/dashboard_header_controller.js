'use strict';

/**
 * @ngdoc function
 * @name currentPtojectApp.controller:MainModuleCtrl
 * @description
 * # MainModuleCtrl
 * Controller of the currentPtojectApp
 */
angular.module('currentPtojectApp')
  .controller('DashboardHeaderCtrl', function ($scope) {
   
   
 $scope.isMessageItemsCollapsed = true;
 $scope.isTaskItemsCollapsed = true;

  });
