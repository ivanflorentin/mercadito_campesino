"use strict"

const webpackConfig = require('./webpack.config')

webpackConfig.devtool = 'inline-source-map'
webpackConfig.entry = {}

module.exports = function (config) {
    config.set({
      browsers: [ 'Chrome' ],
      // karma only needs to know about the test bundle
      files: [
	'tests.bundle.js'
    ],
      frameworks: [ 'chai', 'mocha' ],
      plugins: [
	'karma-chrome-launcher',
	'karma-chai',
	'karma-mocha',
	'karma-mocha-reporter',
	'karma-sourcemap-loader',
	'karma-webpack'
    ],
    // run the bundle through the webpack and sourcemap plugins
      preprocessors: {
	  './tests.bundle.js': [ 'webpack', 'sourcemap' ]
      },
      reporters: [ 'mocha' ],
      singleRun: true,
      // webpack config object
      webpack: webpackConfig,
      webpackMiddleware: {
	  noInfo: true
      }
  })
}
