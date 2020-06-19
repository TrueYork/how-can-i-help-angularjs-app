'use strict';

angular.module('app', ['ngRoute', 'supportApp'])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<support-app></support-app>'
        });
    }
]);
