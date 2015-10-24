var express = require('express');
var router = express.Router();

/* depreciated possibly
*placed idex at the bottom in app.js
var users = require('./users.js');
var groups = require('./groups.js');
var events = require('./events.js');
var search = require('./search.js');
*/

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
//    res.render(page);
//    res.render('index', {
//        title: 'Senior Project'
//    });


/*depreciated possibly
*placed idex at the bottom in app.js

router.use('/api/users', users);
router.use('/api/groups', groups);
router.use('/api/events', events);
router.use('/api/search', search);

*/

/**
 * Render index if no route matched
 */

router.get('*', function(req, res, next) {
    res.render('index', {
        title: 'Senior Project'
    });
});


module.exports = router;
