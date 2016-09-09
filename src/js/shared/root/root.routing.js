(function () {
    'use strict';

    angular
        .module('app.main')
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider', 'appConfig'];
    
    function config ($urlRouterProvider, $stateProvider, appConfig) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                views: {
                    'header': {
                        component: 'headerComponent'
                    },
                    'footer': {
                        templateUrl: appConfig.BASE_VIEWS_PATH + 'footer.html',
                        // controller: 'FooterController',
                        // controllerAs: 'FC'
                    }
                }
            });
    }
})();
