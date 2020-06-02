const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: { // точка входу (вказує файл js з якого починається збірка)
        main: './index.js',
        analytics: './modules/analytics.js'
    },
    output: { // папка вихідної збірки
        filename: '[name].[contenthash].js', // js який отримаємо на виході
        path: path.resolve(__dirname, 'dist') // папка куди все збереться
    },
    plugins: [ // плагіни
        new HtmlWebpackPlugin({  // плагін для роботи з html
            template: './index.html'
        }),
        new CleanWebpackPlugin(), // плагін який очищує папку dist перед збіркою
        new CopyWebpackPlugin({ // плагін для копіювання файлів
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ],
    devServer: { // сервер
        port: 4200
    },
    optimization: { // оптимізація
        splitChunks: { // збирає підключені зовнішні бібліотеки в окремі файли
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(jpg|png|gif|webp|svg)$/,
                use: ['file-loader']
            }
        ]
    }
};
