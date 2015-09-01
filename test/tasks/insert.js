var fs = require('fs');

module.exports = function(grunt) {
    /**
     * Task for inserting data into database.
     * Run this task to insert data, and run
     * alternate command "delete" to remove the
     * data. 
     */
    grunt.registerMultiTask('insert', 'Mass Insert data into database', function() {
        grunt.log.write('Inserting data...\n\n');

        grunt.log.write("Retreiving data from: " + this.data);
        var path = this.data; // Get path to json file
        var file = fs.readFileSync(path, 'utf8');
        var data = JSON.parse(file);
        //grunt.log.write("\nFname: " + data.user.fname + "\n"); 

        grunt.log.write('\nSuccessfully inserted data\n').ok();
    });

     /**
     * Task for removing data from database. 
     * This is the analog to "insert" and should 
     * be used to remove test data after it is 
     * inserted. 
     */
   /*grunt.registerMultiTask('delete', 'Delete data from database', function() {
        grunt.log.write('Removing data...\n\n');

        grunt.log.write('Using file: ' + this.data);
        var path = this.data;
        var data = JSON.parse(fs.readFileSync(path));
        //grunt.log.write("\nFname: " + data.user.fname + "\n"); 

        grunt.log.write('\nSuccessfully removed data').ok();
    });*/
};

