var app = angular.module('app', []);
app.controller('userController', function($scope) {
  $scope.users = [];

  $scope.submit = function() {
    var newuser = {};
    newuser.first_name = $scope.first_name;
    newuser.last_name = $scope.last_name;
    newuser.favorite_language = $scope.favorite_language;
    newuser.created_at = new Date();
    $scope.users.push(newuser);

  };

  $scope.delete = function(user) {
    $scope.users.splice($scope.users.indexOf(user), 1);


  };

});
