const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = { mode: "development" }) => {
  const isProduction = env.mode === "production";
  const plugins = [
    new MiniCssExtractPlugin({
      filename: " scss/style.css",
    }),
  ];

  return {
    mode: env.mode,
    devtool: isProduction ? "" : "inline-source-map",
    entry: {
      app: ["./src/index.js", "./src/scss/style.scss"],
    },
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,

          exclude: /node_modules/,
          use: ["babel-loader"],
        },

        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: !isProduction,
                url: false,
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `styles/[name].css`,
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      // plugins: [
      //   new HtmlWebpackPlugin({
      //     template: "./src/index.html",
      //   }),
      //   // new CleanWebpackPlugin(), // плагін який очищує папку dist перед збіркою
      //   new CopyWebpackPlugin({
      //     // плагін для копіювання файлів
      //     patterns: [
      //       {
      //         from: path.resolve(__dirname, "src/favicon.ico"),
      //         to: path.resolve(__dirname, "dist"),
      //       },
      //     ],
      //   }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: true,
      port: 9000,
      overlay: true,
      stats: {
        modules: false,
      },
    },
  };
};
