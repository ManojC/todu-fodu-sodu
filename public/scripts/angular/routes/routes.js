(function(app, undefined) {

    if (!app)
        throw Error("Application is not initialized");

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.

        when('/match/all', {
            templateUrl: 'partials/match/list.html',
            controller: 'MatchListController',
            controllerAs: 'ctrl'
        }).

        when('/match/upcoming', {
            templateUrl: 'partials/match/list.html',
            controller: 'MatchListController',
            controllerAs: 'ctrl'
        }).

        when('/match/today', {
            templateUrl: 'partials/match/list.html',
            controller: 'MatchListController',
            controllerAs: 'ctrl'
        }).

        otherwise({
            redirectTo: '/'
        });
    }]);

})(window.app = window.app || {});
