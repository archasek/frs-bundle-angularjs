(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = [];

    function HeaderController () {
        var vm = this;

        console.log('header controller')
    }
})();
