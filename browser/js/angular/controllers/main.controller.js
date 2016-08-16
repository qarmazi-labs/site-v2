(function (angular) {
  var app = angular.module('app');

  app.controller('MainController', ['$scope', mainController]);

  function mainController($scope) {
    console.debug('Main controller');
  }
})(angular);