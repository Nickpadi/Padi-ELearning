'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/view1', {
        templateUrl: 'partials/section-title.html',
        controller: 'MyCtrl1'
      })

      .otherwise({
        redirectTo: '/view1'
      });

  }]);
