var heroComponent = {
    bindings: {
        heading: '<'
    },
    templateUrl: ['appConfig', function (appConfig) {
        return appConfig.BASE_VIEWS_PATH + 'hero.html';
    }],
    controller: 'HeroController',
    controllerAs: 'HC'
};

angular
    .module('app.main')
    .component('heroComponent', heroComponent);
