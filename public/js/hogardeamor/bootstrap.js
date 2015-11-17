(function(){
  'use strict';

  require(['angular'], function(angular) {
    require(['hogardeamor/hogardeamor.controller'], function() {
      angular
        .element(document)
        .ready(function() {
          angular.bootstrap(
            document,
            ['hogarDeAmorApp']
          );
        });
    });
  });
})();
