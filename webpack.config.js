const path = require('path');

module.exports = {
    entry: './src/client/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
};