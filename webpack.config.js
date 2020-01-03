const path = require('path');

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { loader: "ts-loader" }
                ]
            },
            {
                enforce: "pre",
                test: /.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        inline: true,
        hot: true,
        watchContentBase: true
    }
}