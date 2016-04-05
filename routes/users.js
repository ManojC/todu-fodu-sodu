var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get-logged-in-user', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    console.log(req.url.slice(1));
    res.end();
});

/* GET users listing. */
router.get('/all', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
