angular
    .module('app.main')
    .service('apiService', apiService);

function apiService (Restangular) {
    var apiService = {};

    apiService.getPosts = function () {
        return Restangular.all('posts').getList()
            .then(function (posts) {
                return posts.plain();
            });
    };
    
    return apiService;
}
