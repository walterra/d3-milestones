module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/stories/assets'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: false } },
        {
          loader: 'less-loader',
          options: { lessOptions: { javascriptEnabled: true } },
        },
      ],
    });
    config.optimization.minimize = false;
    return config;
  },

  docs: {},
};
