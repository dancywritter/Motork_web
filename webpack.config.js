const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./src/js/app.js', './src/scss/main.scss'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    }
}