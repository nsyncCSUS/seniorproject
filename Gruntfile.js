/**
 * Grunt Build File
 */

module.exports = function(grunt) {
    grunt.loadTasks('test/tasks');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
                    //'src/<%= pkg.name %>.js': ['build/<%= pkg.name %>.min.js']
            }
        },
        insert: {
            "data.1": "test/data/data.1.json",
            "data.2": "test/data/data.2.json"
        },
        delete: {
            "data.1": "test/data/data.1.json",
            "data.2": "test/data/data.2.json"
        }
    });

    grunt.loadNpmTasts('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};