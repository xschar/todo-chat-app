const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const isProd = process.env.NODE_ENV === "production"

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: isProd ? "/todo-chat-app/" : "/",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["src", "node_modules"]
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates css into CommonJS
            options: {
              esModule: true,
              // css modules
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]", // format of output
                namedExport: true // named exports instead of default
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    historyApiFallback: true,
    port: 3000,
    open: true
  }
}
