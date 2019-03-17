const StylelintPlugin = require('stylelint-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/azul-game' : '',

  webpack(config, { isServer, dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: dev,
        },
      });
    }

    if (dev && !isServer) {
      config.plugins.push(
        new StylelintPlugin({
          configFile: path.resolve('.stylelintrc'),
        }),
      );
    }

    return config;
  },
};
