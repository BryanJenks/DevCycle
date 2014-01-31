module.exports = function (grunt) {

    // configure
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodeunit: {
            all: ['test/*_test.js']
        },
        apidoc: {
            myapp: {
                src: "./test",
                dest: "public/doc",
                includeFilters: [ ".*\.js$" ],
                excludeFilters: [ ".*node_modules.*" ],
                debug: false,
                marked: {
                    gfm: true
                }
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-apidoc');

    // Default task(s).
    grunt.registerTask('default', ['nodeunit', 'apidoc']);
}