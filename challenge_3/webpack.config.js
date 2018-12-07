const path = require('path');

module.exports = {
  mode: "development",
  context: path.resolve('client'),
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
}