//var webpack = require("webpack");
var entry = './src/main.js',
    output = {
        path: __dirname,
        filename: './public/javascripts/bundle.js'
    };

module.exports = {
    debug : true,
    entry: entry,
    output: output,
    resolve: {
        modulesDirectories: ['./src/js', './node_modules']
    },
    module : {
        loaders : [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.html$/, loader: 'html?config=otherHtmlLoaderConfig' }
        ]
    }
};