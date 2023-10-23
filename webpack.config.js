const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = () => {
  let config = {};

  config = {
    entry: {
      main: './components/main.js',
      polyfills: './components/polyfills.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './public/web/assets/js/'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
        },
        {
          test: /\.(woff2?|woff|ttf|otf|eot)$/,
          loader: 'file-loader',
          exclude: /node_modules/,
          type: 'asset/resource',
          options: {
            name: '[name].woff',
            outputPath: 'fonts/',
            publicPath: '/fonts/',
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].css',
                outputPath: '../css/',
              },
            },
            { loader: 'extract-loader' },
            {
              loader: 'css-loader',
              options: {
                esModule: false,
              },
            },
            { loader: 'postcss-loader' },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['node_modules/'],
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [
      new ESLintPlugin(),
      new MiniCssExtractPlugin({
        filename: 'public/web/assets/[name].css',
      }),
    ],
  };

  return config;
};