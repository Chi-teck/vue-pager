module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'string-replace': {
      dist: {
        files: {
          'dist/vue-pager.min.js': 'src/vue-pager.js'
        },
        options: {
          replacements: [{
            pattern: /TEMPLATE/g,
            replacement: function (match, p1) {
              return grunt.file.read('src/template.html').replace(/\n/g, '').replace(/'/g, "\\'");
            }
          }]
        }
      }
    },

    uglify: {
      build: {
        files: {
          'dist/vue-pager.min.js': ['dist/vue-pager.min.js']
        },
        options: {
          banner: "/**\n * Vue.js pagination\n * https://github.com/Chi-teck/vue-pager\n */\n"
        }
      }
    },

    watch: {
      scripts: {
        files: 'src/*',
        tasks: ['string-replace', 'uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');

};
