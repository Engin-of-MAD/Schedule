'use strict';

angular.module('myApp.schld', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schld', {
    templateUrl: 'view/schld/schld.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);