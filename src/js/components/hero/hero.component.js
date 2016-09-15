(function () {
    'use strict';
    
    var heroComponent = {
        templateUrl: function (appConfig) {
            return appConfig.BASE_VIEWS_PATH + 'Hero.html';
        },
        controller: 'HeroController',
        controllerAs: 'HC'
    };

    angular
        .module('app.main')
        .component('heroComponent', heroComponent);
})();
