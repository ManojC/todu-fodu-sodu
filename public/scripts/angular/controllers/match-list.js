(function(app, undefined) {

    if (!app)
        throw Error("Application is not initialized");

    app.controller('MatchListController', ['KunduFactory', '$location', '$scope', function(kunduFactory, $location, $scope) {

        var self = this;
        self.model = {};
        self.collection = [];

        self.getAllMatches = function() {

            kunduFactory.getAllMatches(function(data) {
                if (data)
                    self.collection = data;
            });
        }

        self.addMatch = function() {
            self.collection.push(self.model);
            self.model = {};
        };

        self.saveMatches = function() {
            if (self.collection)
                kunduFactory.saveMatches(self.collection, function(data) {
                    console.log(data);
                    if (data) {
                        self.collection = [];
                        self.model = {};
                    }
                });
        };

    }]);

})(window.app = window.app || {});
