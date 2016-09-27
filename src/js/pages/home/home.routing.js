angular
    .module('app.main')
    .config(config);

function config ($stateProvider, appConfig) {
    $stateProvider
        .state('index.home', {
            url: '/',
            data: {
                title: 'Home title'
            },
            resolve: {
                heading: function () {
                    return 'home heading';
                }
            },
            views: {
                'main@': {
                    templateUrl: appConfig.BASE_VIEWS_PATH + 'home.html'
                },
                'hero@index.home': {
                    component: 'heroComponent'
                }
            }
        });
}
