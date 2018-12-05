const path = require('path');

// TODO: Fix Me!!!

module.exports = {
  mode: 'development',
  context: path.resolve('client/src'),
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
      },
    ],
  }
};