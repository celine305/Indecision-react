const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'), //absolute path
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, //run javascript files with babel
      exclude: /node_modules/  //folder to exclude
    }]
  },
  devTool: 'cheap-module-eval-source-map',
};
