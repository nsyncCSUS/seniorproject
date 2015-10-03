var fs = require('fs');
var mongoose = require('mongoose');

module.exports = function(grunt) {

    /** 
     * Configuration settings for insert and delete functions.
     * Should be factored out into a file at a later time so
     * people can configure it on their own. 
     */
    var Config = Object.freeze({
        url: '',
        port: '27017',
    });


    /**
     * Task for inserting data into database.
     * Run this task to insert data, and run
     * alternate command "delete" to remove the
     * data. 
     */
    grunt.registerMultiTask('insert', 'Mass Insert data into database', function() {
        grunt.log.write('Inserting data...\n\n');

        grunt.log.write("Retreiving data from: " + this.data + "\n");
        var path = this.data; // Get path to json file
        var file = fs.readFileSync(path, 'utf8');
        var data = JSON.parse(file);

        //var db = mongo.connect(Config.url, Config.port);

        grunt.log.write('\nSuccessfully inserted data\n').ok();
    });
};
