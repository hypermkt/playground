module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha', 'chai'],
    files: [
      'test/**/*.js'
    ],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    reporters: ['progress'],
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true
  })
}
