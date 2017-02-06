module.exports = {
  entry: "./src/main.js",

  output: {
    path: "public",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [
      "src", "node_modules"
    ]
  }
};
