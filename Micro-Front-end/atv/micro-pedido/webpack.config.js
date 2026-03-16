// webpack.config.js - Micro Pedido
// Expõe o componente PedidoApp para ser consumido pelo Container

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  output: {
    // Porta exclusiva deste micro: 3002
    publicPath: "http://localhost:3002/",
  },

  devServer: {
    port: 3002,
    hot: true,
    // Permite requisições cross-origin do container
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      // Nome único deste micro
      name: "microPedido",

      // Arquivo de manifesto carregado pelo Container
      filename: "remoteEntry.js",

      // Módulos expostos para consumo externo
      exposes: {
        "./PedidoApp": "./src/PedidoApp",
      },

      // Dependências compartilhadas (singleton)
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.2.0",
          eager: false,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
          eager: false,
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Micro Pedido (standalone)",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
