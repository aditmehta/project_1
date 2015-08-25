module.exports = function(grunt){
  grunt.initConfig({
  sass: {                              // Task 
    dist: {                            // Target
      files: {                         // Dictionary of files 
        'assets/stylesheets/styles.css': 'assets/stylesheets/styles.scss',
        'assets/stylesheets/home.css': 'assets/stylesheets/home.scss',       
        'assets/stylesheets/services.css': 'assets/stylesheets/services.scss'
      }
    }
  },
  watch: {
    css: {
      files: ['assets/stylesheets/*.scss'],
      tasks: ['sass', 'cssmin'],
    },
  },
  cssmin: {
    target: {
      files: {
        'output.css': ['assets/stylesheets/styles.css','assets/stylesheets/home.css',
        'assets/stylesheets/services.css']
      }
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['sass','cssmin','watch']);
};