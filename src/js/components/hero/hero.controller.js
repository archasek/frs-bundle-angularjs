(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('HeroController', HeroController);

    HeroController.$inject = [];

    function HeroController () {
        var vm = this;

        console.log('vm', vm)

        vm.heading = vm.heading || 'default heading';

        console.log('Hero controller')
    }
})();
