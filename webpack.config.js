const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: 'index.html',
});

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
    ],
  },
};
