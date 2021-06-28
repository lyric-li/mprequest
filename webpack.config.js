// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isprod = process.env.NODE_ENV === "production";

const config = {
  entry: {
    mprequest: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "mprequest",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = () => {
  if (isprod) {
    config.mode = "production";
    config.output.filename = "[name].min.js";
  } else {
    config.mode = "development";
    config.output.filename = "[name].js";
  }
  return config;
};
