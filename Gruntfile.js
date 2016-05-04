module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };
    grunt.initConfig({
        yeoman: appConfig,

        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ['./app/'],
                    livereload: true
              }
            }
        },
        watch: {
            all: {
                files: ['**/*.js, **/*.html'],
                options: {
                    livereload: true
                }
            }
        }

    });


    grunt.registerTask('serve', [
        'express',
        'watch'
    ]);
};
