import path from 'path';
import { fileURLToPath } from 'url';

import { getLoaders, getPlugins } from './webpack/index.js';

const __dirname = fileURLToPath(import.meta.url);
const mode = process.env.NODE_ENV || 'development';

export default {
  mode,
  entry: './src/main.ts',
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      interfaces: path.resolve(__dirname, 'src/interfaces/index.ts'),
      types: path.resolve(__dirname, 'src/types/index.ts'),
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.mjs', '.js', '.svelte', '.ts'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    descriptionFiles: ['package.json'],
  },
  output: {
    filename: 'subway-map.js',
  },
  module: {
    rules: getLoaders(mode),
  },
  plugins: getPlugins(mode),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    client: {
      overlay: true,
    },
    open: {
      app: {
        name: 'Google Chrome', // 'Chrome' is 'Google Chrome' on macOS, 'google-chrome' on Linux, and 'chrome' on Windows
        arguments: ['--new-window'],
      },
    },
  },
};
