import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import sveltePreprocess from 'svelte-preprocess';

import { isProdMode } from './utils.js';

export const getLoaders = (mode) => {
  const babelLoader = {
    test: /\.(js|ts|svelte)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
    },
  };

  const svelteLoader = {
    test: /\.svelte$/,
    exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        emitCss: true,
        hotReload: true,
        preprocess: sveltePreprocess({
          tsconfigFile: './tsconfig.json',
        }),
      },
    },
  };

  const stylesLoader = {
    test: /\.css$/,
    use: [
      isProdMode(mode) ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ],
  };

  const svgInlineLoader = {
    test: /\.svg$/,
    use: {
      loader: 'svg-inline-loader',
    },
  };

  return [babelLoader, svelteLoader, stylesLoader, svgInlineLoader];
};
