(function(app, undefined) {

    if (!app)
        throw Error("Application is not initialized");

    app.controller('BetController', ['KunduFactory', '$location', '$scope', function(kunduFactory, $location, $scope) {

        var self = this;
        self.model = {};
        self.collection = [];
        self.matches = [];
        self.selectedMatch = {};

        self.getAllMatches = function() {

            kunduFactory.getAllMatches(function(data) {
                if (data) {
                    self.matches = data;
                    if (self.matches.length) {
                        self.selectedMatch = self.matches[0];
                    }
                }
            });
        }

        self.getAllBets = function() {

            kunduFactory.getAllBets(function(data) {
                if (data)
                    self.collection = data;
            });
        }

        self.getUserBets = function() {
            kunduFactory.saveBet(self.model, function(data) {
                console.log(data);
                if (data) {
                    self.model = {};
                }
            });
        };

        self.addBet = function() {
            if (self.model)
                kunduFactory.addBet(self.model, function(data) {
                    console.log(data);
                    if (data) {
                        self.model = {};
                    }
                });
        };

        self.getMatchName = function(match) {
            if (match) {
                return match.teamOne + ' v/s ' + match.teamTwo;
            }
        }

    }]);

})(window.app = window.app || {});
