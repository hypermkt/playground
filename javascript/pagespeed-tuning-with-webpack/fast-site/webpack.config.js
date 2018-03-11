var webpack = require('webpack');

module.exports = {
    entry: [
        './src/scripts/main.js',
    ],
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // https://qiita.com/koichirokamoto/items/1bdbee5dd5657012b5fa
                test: /\.(jpg|png)$/,
                loaders: 'url-loader'
              },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })
    ]
}