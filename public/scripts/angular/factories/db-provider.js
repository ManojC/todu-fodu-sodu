(function(app, undefined) {

    if (!app)
        throw Error("Application is not initialized");

    app.factory('KunduFactory', ['$http', function($http) {

        var self = this;
        var mem = {};

        self.NotificationResponse = {};

        return {
            getAllMatches: function(callback) {
                $http.get('/match/all').then(function(response) {
                    if (response && response.data && response.data.Data)
                        callback(response.data.Data);
                    else
                        throw Error("/attendance/all call failed");

                }, function(error) {
                    throw Error("/attendance/all call failed");
                });
            },

            store: function(key, value) {
                mem[key] = value;
            },

            get: function(key) {
                return mem[key];
            }
        };
    }]);

})(window.app = window.app || {});
