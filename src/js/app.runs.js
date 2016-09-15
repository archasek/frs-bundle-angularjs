(function () {
    'use strict';

    angular
        .module('app.main')
        .run(run);

    run.$inject = ['$rootScope', '$state'];

    function run ($rootScope, $state) {
        $rootScope.$state = $state;
    }
})();
