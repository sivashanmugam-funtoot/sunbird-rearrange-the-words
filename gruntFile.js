module.exports = function (grunt) {
    grunt.initConfig({
      express: {
        dev: {
          options: {
            script: 'server.js'
          }
        }
      },
      sass: {
        dist: {
          files: [{
            expand: true,
            cwd: 'public/sass',
            src: ['*.scss'],
            dest: 'public/css',
            ext: '.css'
          }]
        }
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('dev', ['express', 'sass', 'watch']);
  };
