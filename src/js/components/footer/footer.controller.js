(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('FooterController', FooterController);

    FooterController.$inject = [];

    function FooterController() {
        var vm = this;

        console.log('footer controller')
    }
})();
