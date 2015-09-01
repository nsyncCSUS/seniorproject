var fs = require('fs'); 

module.exports = function(grunt) {

    /**
     * Task for removing data from database. 
     * This is the analog to "insert" and should 
     * be used to remove test data after it is 
     * inserted. 
     */ 
    grunt.registerMultiTask('delete', 'Delete data from database', function() {
        grunt.log.write('Removing data...\n\n');

        grunt.log.write('Using file: ' + this.data);
        var path = this.data;
        var data = JSON.parse(fs.readFileSync(path));
        //grunt.log.write("\nFname: " + data.user.fname + "\n"); 

        grunt.log.write('\nSuccessfully removed data').ok();
    });
};


