(function() {
  'use strict';

  require.config({
    paths: {
      // General dependencies
      'angular': '../bower_components/angularjs/angular.min',
      'angularSanitize': '../bower_components/angular-sanitize/angular-sanitize.min',
      'angularRoute': '../bower_components/angular-route/angular-route.min'
    },

    // Exports objects
    shim: {
      'angular': {
        exports: 'angular'
      },
      'hogardeamor': {
        deps: ['angular']
      },
      'angularSanitize': {
        deps: ['angular']
      },
      'angularRoute': {
        deps: ['angular']
      }
    }
  });

  require([
    'hogardeamor/bootstrap'
  ]);
})();
