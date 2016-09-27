angular
    .module('app.main')
    .filter('sanitize', sanitize);

function sanitize ($sce) {
    return function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };
}
