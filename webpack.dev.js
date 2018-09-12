const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: {
    index: ['babel-polyfill', path.join(__dirname, "examples/index.jsx")],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3030
  },
  // Useful for debugging.
  devtool: 'source-map',

  // By default webpack logs warnings if the bundle is bigger than 200kb.
  performance: {
    hints: false
  }
};