module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            main: {
                files: {
                    'assets/css/style.css': 'assets/less/style.less',
                    'assets/css/vendor.css': 'assets/less/vendor.less'
                }
            }
        },
        watch: {
            options: {
                spawn: false, 
            },
            main: {
                files: ['assets/less/**/*'],
                tasks: ['less']
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            main: {
                tasks: ['watch']
            }
        }
    });
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concurrent:main']);
}