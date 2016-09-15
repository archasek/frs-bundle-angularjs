(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('HeroController', HeroController);

    HeroController.$inject = [];

    function HeroController () {
        var vm = this;

        console.log('Hero controller')
    }
})();
