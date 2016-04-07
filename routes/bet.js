var express = require('express');
var router = express.Router();


/* get all bets. */
router.get('/all', function(req, res, next) {
    res.json({ Data: req.session.bets });
});

/* get all bets. */
router.get('/user-bet', function(req, res, next) {
    res.json({ Data: req.session.bets });
});

/* add bets */
router.post('/add', function(req, res) {

    if (!req.session.bets)
        req.session.bets = [];

    if (req.body) {
        req.session.bets.push(req.body);
    }
    res.json({ Data: req.session.bets });
});

/* update match */
router.post('/update', function(req, res) {
    res.end();
});

module.exports = router;
