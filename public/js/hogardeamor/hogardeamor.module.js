(function(){
    'use strict';

  define(function(require) {
    var angular = require('angular');

    require('angularSanitize');
    require('angularRoute');

    angular
      .module('hogarDeAmorApp', [
        'ngRoute',
        'ngSanitize'
      ])
      .config(hogarDeAmorConfig);

    hogarDeAmorConfig.$inject = [
      '$routeProvider',
      '$locationProvider'
    ];

    function hogarDeAmorConfig(
      $routeProvider,
      $locationProvider
    ) {
      var templatesPath = 'public/js/hogardeamor/templates/';

      $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: templatesPath + 'index.template.html'
      })
      /*.when('/add-contact', {
          controller: 'addCtrl',
          templateUrl: '/assets/partials/add.html'
      })
      .when('/contact/:id', {
          controller: 'contactCtrl',
          templateUrl: '/assets/partials/contact.html'
      })*/
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
    }
  });
})();
