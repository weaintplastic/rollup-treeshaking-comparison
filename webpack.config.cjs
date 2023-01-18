const path = require("path");

module.exports = {
  entry: "./src/main.js",
  mode: "production",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist-webpack"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".tsx", ".ts", ".js"],
        },
      },
    ],
  },
};
