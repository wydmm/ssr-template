const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true, // mangle
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
