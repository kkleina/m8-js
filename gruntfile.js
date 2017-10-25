module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
      
    jshint: {
      all: ['gruntfile.js', 'js/*.js'],
      options: {
        force: true,
      }
    },
      
    watch: {
      gruntfile: {
        files: 'gruntfile.js',
        tasks: ['jshint']
      },
      scripts: {
        files: ['scss/*.scss', 'js/*.js'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    }
    
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint', 'watch']);
};