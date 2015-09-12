/**
 * Grunt Build File
 */

module.exports = function(grunt) {

    var build = './build';
    var concat = build + '/concat/';
    var min = build + '/min/';
    var concat_js = concat + 'index.js';
    var concat_html = concat + 'index.html';
    var concat_css = concat + 'index.css';
    var html_index = build + 'index.html';
    var js_index = build + 'index.js';
    var css_index = build + 'index.css';
    
    // Load all tasks into grunt 
    grunt.loadTasks('test/tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: ['src/**/*.js'],
                dest: concat_js 
            },
            css: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: concat_css 
            } 
        }, 
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                //src: ['src/**/*.js', 'build/app/src/**/*.js'], 
                //dest: 'build/<%= pkg.name %>.min.js'
                files: {
                    'build/index.js': ['src/**/*.js', 'build/app/src/**/*.js']
                }
            } 

        },
        jade: {
            compile: {
                options: {
                    data: {} 
                }, 
                files: [{ 
                    expand: true, 
                    cwd: '', 
                    src: ['src/**/*.jade'], // 'src/error.jade'], 
                    dest: 'build/',
                    ext: '.html'
                }] 
            }
        },
        insert: {
            "data.1": "test/data/data.groups.1.json",
            "data.2": "test/data/data.users.1.json" 
        },
        delete: {
            "data.1": "test/data/data.groups.1.json",
            "data.2": "test/data/data.users.1.json" 
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc' 
            }, 
            all: {
                src: [
                    'app.js', 
                    'routes/*.js', 
                    'src/**/*.js', 
                ] 
            }, 
            server: {
                src: [
                    'app.js',
                    'routes/*.js', 
                ]  
            }, 
            client: {
                src: [
                    'src/**/*.js', 
                ]  
            }, 
            test: {
                options: {
                    jshintrc: '.jshintrc' 
                }, 
                src: ['test/tasks/*.js'] 
            } 
        }, 
        ngtemplates: {
            app: {
                src: ['build/src/app/**/*.html'],
                dest: 'build/templates.js'
            },
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true 
            }
        },
        htmlmin: {
            dist: {},
            files: {
                'build/index.html': ['build/src/index.html'] 
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
    // Note: Must run npm install grunt-angular-templates --save
    // to install this feature. 
    // Another Note: May need to find another plugin for compiling
    // jade if this doesn't work. You may be able to compile jade 
    // into a full directory tree in /build, and subsequently 
    // concatenate all those files into one file afterward. 
    // Multi-part build process: Compile jade templates into js, 
    // compile js together, compile index.jade into html, concatenate
    // everything together into one file. Also think about the styles.

    
    grunt.registerTask('default', ['jade', 'ngtemplates', 'htmlmin', 'uglify']); 

};
