const path = require("path")

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              javascriptEnabled: true,
              minimize: true,
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader",
            options: { javascriptEnabled: true, sourceMap: false }
          }
        ],
      },
      {
        // for font
        test: /\.(ttf|otf|eot|woff(?:2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000,
            },
          },
        ],
      },
      {
        // for svg
        test: /\.(svg?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ogg|mp3)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".js", ".json"]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-gb/),
  ]
}
