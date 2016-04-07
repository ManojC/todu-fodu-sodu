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
        when('/match/new', {
            templateUrl: 'partials/match/new.html',
            controller: 'MatchListController',
            controllerAs: 'ctrl'
        }).



        when('/bet/new', {
            templateUrl: 'partials/bet/new.html',
            controller: 'BetController',
            controllerAs: 'ctrl'
        }).
        when('/bet/user-bets', {
            templateUrl: 'partials/bet/user-bets.html',
            controller: 'BetController',
            controllerAs: 'ctrl'
        }).
        when('/bet/all', {
            templateUrl: 'partials/bet/all-bets.html',
            controller: 'BetController',
            controllerAs: 'ctrl'
        }).

        otherwise({
            redirectTo: '/'
        });
    }]);

})(window.app = window.app || {});
