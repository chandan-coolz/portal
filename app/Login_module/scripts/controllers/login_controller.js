angular.module('currentPtojectApp')
  .controller('loginCtrl', function ($scope,$timeout,$location) {

  $scope.isAuthenticating = false;
  $scope.isloginfocusOut = false;
  $scope.ispasswordfocusOut = false;

  $scope.authenticate = function(){

  $scope.isAuthenticating = !$scope.isAuthenticating;

 

    $timeout(function(){

      

        
        if($scope.username=="cool" && $scope.password=="123"){

        	$location.path('/dashboard');

        }else{
    	$scope.isAuthenticating=false;

        }

        

    }, 3000);



  }






  });