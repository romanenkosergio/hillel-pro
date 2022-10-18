const path = require('path');


module.exports = {
    entry: './src/indexPack.js',
    output: {
        filename: 'indexing.js',
        path: path.resolve(__dirname, 'dist')
    }
}