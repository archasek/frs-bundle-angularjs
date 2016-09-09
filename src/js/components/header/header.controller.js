(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = [];

    function HeaderController() {
    	console.log('2222')
        var vm = this;

        console.log('yest!')
    }
})();
