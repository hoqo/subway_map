import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import sveltePreprocess from 'svelte-preprocess';

import { isProdMode } from './utils.js';

export const getLoaders = (mode) => {
  const tsLoader = {
    test: /\.(js|ts|svelte)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'ts-loader',
    },
  };

  const svelteLoader = {
    test:/\.(html|svelte)$/,
    exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        emitCss: true,
        hotReload: !isProdMode(mode),
        preprocess: sveltePreprocess({
          defaults: {
            script: 'typescript',
            style: 'less',
          },
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

  return [tsLoader, svelteLoader, stylesLoader, svgInlineLoader];
};
