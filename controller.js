angular.module('userProfiles')
  .controller('MainController', function($scope, mainService){

   $scope.userGet = mainService.getUser();

    $scope.toggleFav = mainService.toggleFavorite;



});
