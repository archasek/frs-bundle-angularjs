(function () {
    'use strict';
    
    var heroComponent = {
        bindings: {
            heading: '<'
        },
        templateUrl: function (appConfig) {
            return appConfig.BASE_VIEWS_PATH + 'hero.html';
        },
        controller: 'HeroController',
        controllerAs: 'HC'
    };

    angular
        .module('app.main')
        .component('heroComponent', heroComponent);
})();
