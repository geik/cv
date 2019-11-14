module.exports = function (grunt) {

    grunt.initConfig({
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'eikens.com',
                    port: 21,
                    authKey: 'key1',
                    authPath: 'security/.ftppass'
                },
                src: 'dist',
                dest: '/guus',
                exclusions: []
            }
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('default', ['ftp-deploy']);

};