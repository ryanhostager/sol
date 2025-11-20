export default {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    // addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    webpackFinal: async (config) => {
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
        ]
        });
        config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}