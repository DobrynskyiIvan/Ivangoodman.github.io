const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /tests/],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    // оптимізація
    splitChunks: {
      // збирає підключені зовнішні бібліотеки в окремі файли
      chunks: "all",
    },
  },
};
