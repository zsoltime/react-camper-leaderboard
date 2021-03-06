const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body',
});
const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'style.css',
});

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './app/app.jsx',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
      './app/components',
    ],
    alias: {
      styles: 'app/styles/style.sass',
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: [
        'babel-loader',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.sass$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: { minimize: true },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer],
          },
        }, {
          loader: 'sass-loader',
        }],
      }),
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        conditionals: true,
        dead_code: true,
        drop_debugger: true,
        screw_ie8: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
