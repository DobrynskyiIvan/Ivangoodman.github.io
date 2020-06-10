const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // ігнорує папку node_modules
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(jpg|png|gif|webp|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(), // плагін який очищує папку dist перед збіркою
    new CopyWebpackPlugin({
      // плагін для копіювання файлів
      patterns: [
        {
          from: path.resolve(__dirname, "./favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
        //   {
        //   from:   'src/assets/',
        //   to:  'dist/img/',
        //   transform(content, 'src/assets/') {
        //     return optimize(content);
        //   },
        //   // Should be absolute
        //   cacheTransform: path.resolve(__dirname, 'dist/cache'),
        //
      ],
    }),
  ],
  optimization: {
    // оптимізація
    splitChunks: {
      // збирає підключені зовнішні бібліотеки в окремі файли
      chunks: "all",
    },
  },
};
