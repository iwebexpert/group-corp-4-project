const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

// const deps = require('./package.json').dependencies

module.exports = {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      containers: path.join(__dirname, 'src', 'containers'),
      actions: path.join(__dirname, 'src', 'actions'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      services: path.join(__dirname, 'src', 'services'),
      middlewares: path.join(__dirname, 'src', 'middlewares'),
      helpers: path.join(__dirname, 'src', 'helpers'),
      contexts: path.join(__dirname, 'src', 'contexts'),
      pages: path.join(__dirname, 'src', 'pages'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      // { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.s?css$/i,
        use: [
          // process.env.NODE_ENV === "development"
          //   ? "style-loader"
          //   : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api/v1': '' },
        secure: false,
    },
  },
  historyApiFallback: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    // new ModuleFederationPlugin({
    //   name: 'host',
    //   filename: 'remoteEntry.js',
    //   remotes: {
    //     remote: 'remote@http://localhost:9001/remoteEntry.js'
    //   },
    //   exposes: {},
    //   shared: {
    //     ...deps,
    //     react: {
    //       requiredVersion: deps.react,
    //       singleton: true,
    //     },
    //     'react-dom': {
    //       requiredVersion: deps['react-dom'],
    //       singleton: true,
    //     },
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      title: "Учебный проект v1.0.0",
      favicon: path.join(__dirname, "src", "favicon.png")
    }),

    new MiniCssExtractPlugin({
      filename: "index.css",
    }),

    new Dotenv({
      systemvars: true,
      expand: true,
    }),
  ],
};
