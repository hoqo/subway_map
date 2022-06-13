import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const pluginsByMode = {
  production: [new MiniCssExtractPlugin({
    filename: 'subway-map.css',
  })],
  development: [], // webpack / webpack-dev-server enhancement plugins
};

export const getPlugins = (mode) => {
  return pluginsByMode[mode];
};
