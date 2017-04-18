angular
    .module('app.main')
    .config(compileConfig)
    .config(httpConfig)
    .config(restangularConfig);

// debug on/off - turn off to improve performance
function compileConfig ($compileProvider) {
    // uncomment when going to prod
    // $compileProvider.debugInfoEnabled(false);
}


// REDUCING THE NUMBER OF $APPLY() CALLS
function httpConfig ($httpProvider) {
    $httpProvider.useApplyAsync(true);
}


// restangular config
function restangularConfig (RestangularProvider) {
    RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com');
}
