const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.ts'],
  },
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
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: require('svelte-preprocess')({
              defaults: {
                script: 'typescript',
              },
              tsconfigFile: './tsconfig.json',
            }),
          },
        },
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader',
        },
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devtool: 'inline-source-map',
};
