import { resolve as _resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

export const entry = './src/index.js';
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
};
export const resolve = {
  extensions: ['.js', '.jsx'],
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
      },
    },
    {
      test: /\.(s*)css$/,
      use: [
        {
          loader: _loader,
        },
        'css-loader',
        'sass-loader',
      ],
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
  }),
];
export const devServer = {
  contentBase: join(__dirname, 'dist'),
  compress: true,
  open: true,
  port: 3000,
  watchOptions: {
    poll: true,
    ignored: '/node_modules/',
  },
};
