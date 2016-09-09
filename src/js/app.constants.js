(function () {
    'use strict';

    angular
        .module('app.main')
        .constant('appConfig', {
            BASE_VIEWS_PATH: '/views/',
            API_URL: '/api'
        });
})();
