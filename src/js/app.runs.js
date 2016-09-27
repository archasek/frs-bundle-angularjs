angular
    .module('app.main')
    .run(run);

function run ($rootScope, $state) {
    $rootScope.$state = $state;
}
