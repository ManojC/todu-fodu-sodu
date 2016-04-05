(function(app, undefined) {

    if (!app)
        throw Error("Application is not initialized");

    app.controller('MatchListController', ['KunduFactory', '$location', '$scope', function(kunduFactory, $location, $scope) {

        var self = this;
        self.matches = [];

        kunduFactory.getAllMatches(function(data) {
            self.matches = data;
        });

        self.match = 'MI v/s RR';
    }]);

})(window.app = window.app || {});
