const path = require('path')
const jsDocPlugin = require('jsdoc-webpack-plugin')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  plugins: [
    new jsDocPlugin({
      conf: "jsdoc.config.json",
      cwd: ".",
      preserveTmpFile: false
    })
  ]
};