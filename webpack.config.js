/**
 * Created by jongmin.kim on 10/02/2017.
 */
var path = require('path');

module.exports = {
    entry: './src/js/main.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/js/dist')
    }
};
