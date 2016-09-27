angular
    .module('app.main')
    .config(config);

function config ($stateProvider, appConfig) {
    $stateProvider
        .state('index.another', {
            url: '/another',
            data: {
                title: 'Another title'
            },
            resolve: {
                heading: function () {
                    return 'Another page heading';
                }
            },
            views: {
                'main@': {
                    templateUrl: appConfig.BASE_VIEWS_PATH + 'another.html'
                },
                'hero@index.another': {
                    component: 'heroComponent'
                }
            }
        });
}
