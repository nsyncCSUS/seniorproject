var express = require('express');
var router = express.Router();


var users = require('./users.js'); 
var groups = require('./groups.js'); 
var events = require('./events.js'); 


router.get('/', function(req, res, next) {
    /*res.render('index', {
        title: 'Senior Project'
    });*/ 
   res.render('index.jade'); 
});


/**
 * Render files from compiled build directory. 
 */
/*router.get('/build/:page', function(req, res, next) {
    var page = req.params.page; 
    try {
        res.send(page); 
    } catch (e) {
        return res.status(404).send('Not Found'); 
    } 
});*/ 


router.get('/partials/:page', function(req, res, next) {
    var page = req.params.page;
    console.log(page); 
    res.render('partials/' + page); 
    //res.render('index', {
    //    title: 'Senior Project'
    //});
}); 




router.use('/users', users); 
router.use('/groups', groups); 
router.use('/events', events); 



/**
 * Render index if no route matched
 */
router.get('*', function(req, res, next) {
    res.render('index', {
        title: 'Senior Project'
    });
});



module.exports = router;
