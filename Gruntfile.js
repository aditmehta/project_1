module.exports = function(grunt){
  grunt.initConfig({
  sass: {                              // Task 
    dist: {                            // Target
      files: {                         // Dictionary of files 
        'assets/stylesheets/styles.css': 'assets/stylesheets/styles.scss',
        'assets/stylesheets/home.css': 'assets/stylesheets/home.scss',       
      }
    }
  },
  watch: {
    css: {
      files: ['assets/stylesheets/*.scss'],
      tasks: ['sass'],
    },
  }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass','watch']);
};