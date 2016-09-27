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
    RestangularProvider.setBaseUrl();

    RestangularProvider.setResponseExtractor(function (response, operation, what) {
        if (operation === 'getList') {
            if (what.indexOf("/") > -1) {
                var parts = what.split("/");
                what = parts[parts.length - 1];
            }
            return _.toArray(response[what]);
        } else {
            return response;
        }
    });

    RestangularProvider.addRequestInterceptor(function (element, operation, what) {
        var newRequest = {};

        if (operation === 'post' || operation === 'put') {
            what = what.split('');
            what.pop();
            what = what.join('');
        }
        if (operation === 'put') {
            delete element._links;
        }
        if (what.indexOf("/") > -1) {
            var parts = what.split("/");
            what = parts[parts.length - 1];
        }

        newRequest[what] = element;
        return newRequest;
    });

    RestangularProvider.setRestangularFields({
        selfLink: '_links.self.href'
    });
}
