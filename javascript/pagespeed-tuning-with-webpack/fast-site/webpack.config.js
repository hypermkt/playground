module.exports = {
    entry: [
        './src/scripts/main.js',
        './src/scripts/slideshow.js',
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
                test: /\.(sass|scss)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}