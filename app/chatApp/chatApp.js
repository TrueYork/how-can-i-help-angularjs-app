'use strict';

angular.module('chatApp', ['ngRoute'])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<div id="main"><toolbar></toolbar><welcome></welcome></div>'
        });
    }
]);