module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/stories/assets'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  docs: {},
};
