const babel = require('@rollup/plugin-babel');
const tapSpec = require('tap-spec');
const eslint = require('@rollup/plugin-eslint');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const { getBranch } = require('./test/get_git_branch');

const APM_GIT_BRANCH = getBranch();
const APM_SERVER =
  process.env.APM_SERVER !== undefined
    ? `"${process.env.APM_SERVER}"`
    : undefined;

module.exports = (config) => {
  const configuration = {
    autoWatch: false,
    browsers: ['Firefox'],
    browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: false,
    },
    colors: true,
    files: [
      'node_modules/@elastic/apm-rum/dist/bundles/elastic-apm-rum.umd.min.js',
      'build/d3-milestones.css',
      'build/tape.js',
      { pattern: 'test/*-test.js', watched: false },
    ],
    frameworks: ['tap'],
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
      external: ['tape'],
      output: {
        intro: `const APM_GIT_BRANCH = "${APM_GIT_BRANCH}";\nconst APM_SERVER = ${APM_SERVER};\n`,
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
        babel({ babelHelpers: 'bundled' }),
      ],
    },
    singleRun: true,
    tapReporter: {
      prettify: tapSpec,
    },
  };

  config.set(configuration);
};
