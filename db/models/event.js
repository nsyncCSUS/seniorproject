
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Schema for Event objects 
 */
var EventSchema = new Schema({
    name: String 
});


var Event = mongoose.model('Event', EventSchema);
module.exports = Event;

