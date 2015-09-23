var express = require('express');
var router = express.Router();
// Expressjwt module checks if the token given is correct
// the token is given though angular every time there is an http request
// check authInterceptor in seniorprojectapp.js
var expressJwt = require('express-jwt');
router.use(expressJwt({secret: 'secret'}));

// Debugg detle 
router.get('/',function(req,res){
console.log(req);
    console.log("event test");
console.log(req.headers);
    
res.json('finished');
});

module.exports = router;
