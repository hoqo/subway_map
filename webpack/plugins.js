import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const pluginsByMode = {
  production: [new MiniCssExtractPlugin()],
  development: [], // webpack / webpack-dev-server enhancement plugins
};

export const getPlugins = (mode) => {
  return pluginsByMode[mode];
};
