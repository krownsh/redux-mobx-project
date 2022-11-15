const path = require("path");

const webpackBaseConfig = {
  entry: path.join(__dirname, "../src/index.jsx"), //入口文件
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[fullhash:4].js",
  },
  resolve: {
    extension: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|c)ss/,
        use: ['style-loader','css-loader','sass-loader'],
      },
    ],
  },
};

module.exports = webpackBaseConfig;
