module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          removeComments: true, 
          collapseWhitespace: true
        },
        files: {
          src:'index.html',
          dest:'dist/index.html'
        }
      },
      cssmin: {
        'dist/register.css':'register.css'
      },
      uglify: {
         'dist/register.js':'register.js'
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('release', ['uglify','cssmin','htmlmin']);
  };