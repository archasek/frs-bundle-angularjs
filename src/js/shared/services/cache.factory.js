(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('cacheFactory', cacheFactory);

    cacheFactory.$inject = ['$cacheFactory'];

    function cacheFactory ($cacheFactory) {
        var httpCache = $cacheFactory.get('$http');
        
        return {
            remove: function (url) {
                // console.log('before delete', httpCache.get(url))
                httpCache.remove(url);
                // console.log('after delete', httpCache.get(url))
            }
        };
    }
})();
