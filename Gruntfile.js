module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      combine: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n\n'
        },
        files: {
          'build/js/main.min.js': ['src/js/*.js']
        }
      }
    },
    cssmin: {
      combine: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'build/css/main.min.css': ['src/css/*.css']
        }
      }
    },
    htmlmin: {
      dev: {
        options: {
          banner: '<!--! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> -->\n',
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        expand: true,
        cwd: 'src',
        src: ['**/*.html'],
        dest: 'build/'
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['fonts/*'],
            dest: 'build/'
          },
          {
            expand: true,
            cwd: 'src',
            src: ['images/*'],
            dest: 'build/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy']);

};