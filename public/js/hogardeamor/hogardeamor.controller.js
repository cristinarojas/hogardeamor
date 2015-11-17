(function(){
    'use strict';

    define(function(require) {
        var angular = require('angular');

        require('./hogardeamor.module');

        angular
            .module('hogarDeAmorApp')
            .controller('mainCtrl', mainCtrl)
            .controller('indexCtrl', indexCtrl)
            .controller('addCtrl', addCtrl);

        mainCtrl.$inject = [
            '$scope',
            '$location'
        ];

        function mainCtrl($scope, $location) {
            $scope.startSearch = function(){
                $location.path('/');
            };

            $scope.pageClass = function(path) {
                return (path === $location.path()) ? 'active' : '';
            };
        }

        indexCtrl.$inject = ['$scope'];

        function indexCtrl($scope) {
            console.log('index');
        }

        addCtrl.$inject = ['$scope'];

        function addCtrl($scope) {
            console.log('Add');
        }
    });
})();
