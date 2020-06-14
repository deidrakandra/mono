var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
  entry: [
    './node_modules/normalize.css/normalize.css',
    './projects/nda-ui/css/simple-grid.min.css',
    './projects/nda-ui/scss/main.scss'
  ],
  module: {
    rules: [
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "nda-ui.css"
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  watch: false,
  watchOptions: {
    aggregateTimeout: 750
  }
};