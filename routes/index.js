var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Senior Project' });
});

router.get('/partials/:page', function(req, res, next) {
	var page = req.params.page;
	res.render('partials/' + page);
});

/*
router.get('*', function(req, res, next) {
	res.render('index', { title: 'Senior Project' });
});

*/

module.exports = router;
