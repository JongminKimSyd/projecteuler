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
};/**
 * Created by jongmin.kim on 10/02/2017.
 */

// var debug = process.env.NODE_ENV !== "production";
//
// var path = require('path');
//
// module.exports = {
//     context: path.join(__dirname, "src"),
//     devtool: debug ? "inline-sourcemap" : null,
//     entry: "./js/client.js",
//
//     output: {
//         path: __dirname + "/src/",
//         filename: "client.min.js"
//     },
//     plugins: debug ? [] : [
//         new webpack.optimize.DedupePlugin(),
//         new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//     ],
// };

