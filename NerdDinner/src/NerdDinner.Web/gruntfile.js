﻿module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: 'wwwroot/lib',
                    layout: 'byComponent',
                    cleanTargetDir: true
                }
            }
        },

        clean: {
            options: {
                force: true
            },

            build: ['wwwroot/views', 'wwwroot/app.js']
        },
        
        copy: ﻿{
            main: {
                expand: true,
                cwd: 'ng-apps/Views',
                src: '**',
                dest: 'wwwroot/views',
                flatten: true,
                filter: 'isFile',
            }
        },

        uglify: {
            options: {
                compress: {
                    drop_debugger: false
                }
            },
            my_target: {
                options: {
                    beautify: true
                },
                files: { 'wwwroot/app.js': ['ng-apps/app.js', 'ng-apps/**/*.js'] },
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // define tasks
    grunt.registerTask('default', ['clean', 'copy', 'bower:install', 'uglify', 'watch']);
};