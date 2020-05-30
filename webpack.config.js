const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
      contentBase: './dist',
  },
  plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {from: './index.html', to: './index.html'},
            { from: './assets', to: './assets' },
        ]),
    ],
  mode: 'development'
};