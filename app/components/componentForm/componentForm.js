'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Form', {
    templateUrl: 'components/componentForm/componentForm.html',
    controller: 'formCtrl'
  });
}])

.controller('formCtrl', ["$scope", function($scope) {
  $scope.phone = ""
  $scope.doctors = ['Педиатор', 'Гастроэнтериолог', 'Энедекриолог', 'Психолог']
  $scope.orgs = ['Городская больница №5', 'Артмед', 'Март']
  $scope.sendBtn = ()=>{
    alert("Запись отправлена")
  }
}])