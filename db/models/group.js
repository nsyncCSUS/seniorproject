
(function(module) {
    'use strict';
    
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema; 
    
    /**
     * Schema for Group Objects 
     */
    var GroupSchema = new Schema({
        name: String
    }); 
    
    
    var Group = mongoose.model('Group', GroupSchema); 
    module.exports = Group;

})(module);

