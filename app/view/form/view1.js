'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'view/form/form.html',
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