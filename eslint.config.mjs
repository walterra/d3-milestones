import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['build/**', 'node_modules/**', 'storybook-static/**'],
  },
  eslint.configs.recommended,
  prettierConfig,
  {
    files: ['src/**/*.js', 'test/**/*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ENV: 'writable',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['src/**/*.test.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
  {
    files: ['test/apm.js'],
    languageOptions: {
      globals: {
        APM_GIT_BRANCH: 'readonly',
        APM_SERVER: 'readonly',
        elasticApm: 'readonly',
      },
    },
  },
];
