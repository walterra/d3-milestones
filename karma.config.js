const buble = require('@rollup/plugin-buble');
const tapSpec = require('tap-spec');
const eslint = require('@rollup/plugin-eslint');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = (config) => {
  const configuration = {
    autoWatch: false,
    // client: { captureConsole: false },
    browsers: ['Firefox'],
    browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: false,
    },
    colors: true,
    files: [
      'build/d3-milestones.css',
      'build/tape.js',
      { pattern: 'test/*-test.js', watched: false },
    ],
    frameworks: ['tap'],
    // logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_ERROR,
    plugins: [
      'karma-rollup-preprocessor',
      'karma-tap',
      'karma-tap-pretty-reporter',
      'karma-firefox-launcher',
    ],
    preprocessors: {
      'test/*-test.js': ['rollup'],
    },
    reporters: ['tap-pretty'],
    rollupPreprocessor: {
      // context: 'this',
      external: ['tape'],
      output: {
        format: 'iife',
        globals: {
          tape: 'tape',
        },
        sourcemap: 'inline',
      },
      plugins: [
        eslint({
          exclude: ['src/styles/**'],
        }),
        nodeResolve(),
        buble(),
      ],
    },
    singleRun: true,
    tapReporter: {
      prettify: tapSpec,
    },
  };

  config.set(configuration);
};
