const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx|tsx$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: "/node_modules/",
      },
      {
        test: /\.css|sass|less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpg|svg|png|gif|jpeg|json|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|otf|woff2)$/,
        use: ["file-loader"],
      },
      {
        test: /\.json$/,
        type: "json",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
