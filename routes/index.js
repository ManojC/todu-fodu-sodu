var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('home.html', {
        root: './public'
    });
});

/* Page not found. */
router.get('*', function(req, res, next) {
    res.sendFile('page-not-found.html', {
        root: './public'
    });
});

module.exports = router;
