const path = require('path');

module.exports = {
  entry: './../boom-squad/src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
};