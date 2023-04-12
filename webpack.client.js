const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const prodConfig = require('./webpack.prod.js');
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  devtool: isProduction ? false : 'inline-source-map',
};

let _e = merge(baseConfig, config);
if (isProduction) {
  _e = merge(_e, prodConfig);
}

module.exports = _e;
