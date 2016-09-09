(function () {
    'use strict';

    angular
        .module('app.main')
        .config(config);

    config.$inject = ['$stateProvider', 'appConfig'];
    
    function config ($stateProvider, appConfig) {
        $stateProvider
            .state('root.home', {
                url: '/',
                views: {
                    'main@': {
                        template: '<div>elo</div>'
                    }
                }
            });
    }
})();
