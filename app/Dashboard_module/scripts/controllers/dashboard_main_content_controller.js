


angular.module('currentPtojectApp')
  .controller('mainContentCtrl', function ($scope,$rootScope,subscribedModule,$sce) {
   
   
   $scope.subscriptionfullscreen = false;
   $scope.viewOrderfullscreen = false;
   $scope.boxEnlarged = false;
 //  $scope.moduleThreefullscreen = false;
 //  $scope.moduleFourfullscreen = false
   

//function to control enlarging of our module
$scope.enlarge = function(module){
$scope.moduleID[module] = true;
$scope.boxEnlarged = true;
}

//function to control compress of our module
$scope.compress = function (module){

$scope.moduleID[module] = false;
$scope.boxEnlarged = false;
}




  
//mapping of module name and its url

$scope.moduleMapping = {

"Subscription" : "subscription_module/views/subscription.html",
"Order"        : "order_module/views/view-order.html",
"Module3"      : "order_module/views/view-order.html",
"Module4"      : "subscription_module/views/subscription.html"


}


   //create a id for all module
$scope.moduleID = {};
// fetch the module info from services
   $scope.moduleSubscribed = [];
   subscribedModule.getList().then(function(data){
   
   $scope.moduleSubscribed = data;

   angular.forEach(data,function(value,key){

    $scope.moduleID[value] = false;
    


   });
 
   

   });




  });