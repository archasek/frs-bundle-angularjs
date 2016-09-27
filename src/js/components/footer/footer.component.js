var footerComponent = {
    templateUrl: ['appConfig', function (appConfig) {
        return appConfig.BASE_VIEWS_PATH + 'footer.html';
    }],
    controller: 'FooterController',
    controllerAs: 'FC'
};

angular
    .module('app.main')
    .component('footerComponent', footerComponent);
