var express = require('express');
var router = express.Router();


/* get all matches. */
router.get('/all', function(req, res, next) {
    res.json({ Data: req.session.matches });
});

/* get today's matches */
router.get('/today', function(req, res) {
    res.end();
});

/* get upcoming matches */
router.get('/upcoming', function(req, res) {
    res.end();
});

/* get match with id */
router.get('/:id', function(req, res) {
    res.end();
});

/* add matches */
router.post('/add', function(req, res) {

    if (!req.session.matches)
        req.session.matches = [];

    if (req.body && req.body.length) {
        for (var i = 0; i < req.body.length; i++) {
            req.session.matches.push(req.body[i]);
        };
    }
    res.json({ Data: req.session.matches });
});

/* update match */
router.post('/update', function(req, res) {
    res.end();
});

module.exports = router;
