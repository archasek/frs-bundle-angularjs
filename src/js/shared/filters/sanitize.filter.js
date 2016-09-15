(function () {
    'use strict';

    angular
        .module('app.main')
        .filter('sanitize', sanitize);

    sanitize.$inject = ['$sce'];

    function sanitize ($sce) {
        return function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }
})();
