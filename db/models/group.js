
var mongoose = require('mongoose');
var Shema = mongoose.Schema; 

/**
 * Schema for Group Objects 
 */
var GroupSchema = new Schema({
    name: String
}); 


var Group = mongoose.model('Group', GroupSchema); 
module.exports = Group;


