const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        'img': path.resolve(__dirname, 'src/img')
      }
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
