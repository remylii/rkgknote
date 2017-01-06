module.exports = {
  entry: "./src/main.js",

  output: {
    path: "public",
    filename: "bundle.js"
  },

  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: ["babel-loader"],
    //     exclude: /node_modules/
    //   }
    // ]
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
