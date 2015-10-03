var fs = require('fs');
var mongoose = require('mongoose');

module.exports = function(grunt) {

    /**
     * Configuration settings for grunt tasks
     */
    var Config = Object.freeze({
        url: '',
        port: '27017'
    });


    /**
     * Task for removing data from database. 
     * This is the analog to "insert" and should 
     * be used to remove test data after it is 
     * inserted. 
     */
    grunt.registerMultiTask('delete', 'Delete data from database', function() {
        grunt.log.write('Removing data...\n\n');

        grunt.log.write('Using file: ' + this.data + "\n");
        console.log(__dirname); 
        var path = this.data;
        var data = JSON.parse(fs.readFileSync(path));

        //var db = mongo.connect(Config.url, Config.port);

        grunt.log.write('\nSuccessfully removed data').ok();
    });
};
