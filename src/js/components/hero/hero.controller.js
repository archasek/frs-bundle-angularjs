angular
    .module('app.main')
    .controller('HeroController', HeroController);

function HeroController () {
    var vm = this;

    console.log('vm', vm)

    vm.heading = vm.heading || 'default heading';

    console.log('Hero controller')
}
