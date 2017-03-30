module.exports = function(grunt) {
  var allFiles = [
      'test/**/*.js', 'lib/**/*.js', 'filters/**/*.js', 'models/**/*.js', 'services/**/*.js', 'controllers/**/*.js'];

  // Project configuration.
  grunt.initConfig({
    jasmine: {
      all: allFiles
    },
    jshint: {
      all: allFiles,
      options: {
	node: true,
 	indent: 4,
	globals: {
	  afterEach: true,
  	  beforeEach: true,
	  describe: true,
	  expect: true,
	  it: true
        }
      }
    },
    karma: {
      unit: {
	    options: {
	        frameworks: ['jasmine'],
   	        singleRun: true,
	        browsers: ['PhantomJS'],
	        files:  [
                'lib/jquery.js',
                'lib/underscore-min.js',
                'lib/angular.min.js',
                'lib/angular-mocks.js',
                'lib/angular-cookies.min.js',
                'lib/dirPagination.js',
                'lib/restangular.min.js',
                'lib/bootstrap.min.js',
                'filters/filters.module.js',
                'filters/common-filters.filter.js',
                'models/generic.model.module.js',
                'models/generic.object.model.js',
                'models/generic.metadata.model.js',
                'models/paginate.model.js',
                'services/restful-services/restful-services.module.js',
                'services/restful-services/restful-service.js',
                'services/pagination/pagination.module.js',
                'services/pagination/pagination.service.js',
                'services/cookies/cookies.module.js',
                'services/cookies/cookies.service.js',
                'services/restful-services/entity-rest.factory.js',
                'services/common-functions/entity.functions.js',
                'services/common-functions/restful.functions.js',
                'controllers/generic.entity.controller.module.js',
                'controllers/generic.manage.controller.module.js',
                'controllers/generic.entity.controller.js',
                'controllers/generic.manage.controller.js',
                'test/**/*.js'
            ]
	    }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-cli');

  // Default task(s).
  grunt.registerTask('default', ['karma', 'jshint']);
};
