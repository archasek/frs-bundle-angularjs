angular
    .module('app.main')
    .controller('HeroController', HeroController);

function HeroController (apiService) {
    var vm = this;

    console.log('vm', vm)

    vm.heading = vm.heading || 'default heading';

    console.log('Hero controller')

    apiService.getPosts()
        .then(function (res) {
            vm.posts = res;
        });
}
