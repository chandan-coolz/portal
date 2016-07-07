angular.module('currentPtojectApp')
  .controller('loginCtrl', function ($scope,$timeout,$location,Login) {

  $scope.isAuthenticating = false;
  $scope.isloginfocusOut = false;
  $scope.ispasswordfocusOut = false;
  $scope.invalidLogin = false;

  $scope.authenticate = function(){

   $scope.invalidLogin = false;
  $scope.isAuthenticating = !$scope.isAuthenticating;
 
   


  
   Login.one($scope.username).get().then( function(data){

        
      if(data.password == $scope.password){
      

       $location.path('/dashboard');
          
      	      	
      }
      
    }, function(error){
    	 
        $scope.invalidLogin = true;
    }).finally(function(){
 
         
         $scope.isAuthenticating=false;
    });


   
    
    

      

        



}//authenticate function






  });