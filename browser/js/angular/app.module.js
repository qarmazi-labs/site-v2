(function (angular) {
  var app = angular.module('app',[]);

  app.config(function () {
    console.debug('App is running');
  });

})(angular);

require('./controllers/main.controller');
