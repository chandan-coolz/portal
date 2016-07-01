angular.module('currentPtojectApp')
  .controller('forgetPasswordCtrl', function ($scope,$location) {

   $scope.isUserNamefocusOut=false;


   $scope.close = function(){

    $location.path('/');

   }  




  });