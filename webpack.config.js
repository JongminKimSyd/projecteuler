/**
 * Created by jongmin.kim on 10/02/2017.
 */

var path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/js/dist')
    }
};
