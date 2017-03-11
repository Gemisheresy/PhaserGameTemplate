var path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
    pixi = path.join(phaserModule, 'build/custom/pixi.js'),
    p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {

    entry: "./src/main.js",
    output: {
        path: __dirname + '/bin',
        filename: "app.bundle.js"
    },

    module: {
        loaders: [
            { test: /pixi.js/, loader: "script-loader" },
            { test: /p2.js/,loader:"script-loader" },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','es2016']
                }
            },
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2,
        }
    }
};