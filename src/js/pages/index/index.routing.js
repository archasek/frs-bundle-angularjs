(function () {
    'use strict';

    angular
        .module('app.main')
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];
    
    function config ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('index', {
                abstract: true,
                views: {
                    'header': {
                        component: 'headerComponent'
                    },
                    'footer': {
                        component: 'footerComponent'
                    }
                }
            });
    }
})();
