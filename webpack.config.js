const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    resolve: {
        fallback: {
            util: require.resolve("util/")
        }
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png)$/i,
                type: 'asset/resource'
            }
        ]
    }
}