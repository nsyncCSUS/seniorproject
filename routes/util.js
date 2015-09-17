(function(exports) {
    'use strict';

    // var exports = {}; 

    exports.takeEventProjection = function(event) {

    };

    exports.takeUserProjection = function(user) {

    };

    exports.takeGroupProjection = function(group) {

    };


    /**
     * Function for logging internal server error
     */
    exports.err = function(err, response) {
        console.log(err);
        response.status(500).send({
            err: err
        });
    };

    return exports;
})(module.exports);