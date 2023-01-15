'use strict';



angular.module('myApp.form', ['ngRoute', 'ui.mask'])

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

  $scope.chek_date = check_diff_date()

  function check_diff_date(){
    let curr_date = new Date().toLocaleDateString()
    let diff_date = curr_date - $scope.date_of_visit
    if (diff_date < 0){
      return false
    }
    else {
      return true
    }
  }


}])