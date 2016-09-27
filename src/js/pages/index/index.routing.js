angular
    .module('app.main')
    .config(config);

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
