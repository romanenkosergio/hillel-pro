const path = require('path');


module.exports = {
    entry: './srcEnter/indexjs.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}