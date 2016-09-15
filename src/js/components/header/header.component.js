(function () {
    'use strict';
    
    var headerComponent = {
        templateUrl: function (appConfig) {
            return appConfig.BASE_VIEWS_PATH + 'header.html';
        },
        controller: 'HeaderController',
        controllerAs: 'HC'
    };

    angular
        .module('app.main')
        .component('headerComponent', headerComponent);
})();
