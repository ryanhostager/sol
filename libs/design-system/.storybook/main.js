import path from 'path';

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  //   addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-webpack5',

  webpackFinal: async (config) => {
    // Remove all existing CSS rules
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes('css'))
    );

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '.'),
      ],
    });

    // babel loader for TS/TSX files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      ],
      exclude: /node_modules/,
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },

  addons: ['@storybook/addon-a11y']
};