const path = require('path');

module.exports = {
  entry: "client/src",
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
  }

}