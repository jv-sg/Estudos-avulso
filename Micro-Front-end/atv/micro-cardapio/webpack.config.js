// webpack.config.js - Micro Cardápio
// Expõe o componente CardapioApp para ser consumido pelo Container

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  output: {
    // Porta exclusiva deste micro: 3001
    publicPath: "http://localhost:3001/",
  },

  devServer: {
    port: 3001,
    hot: true,
    // Permite o container acessar este micro (CORS)
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
      // Nome único deste micro, deve coincidir com o remote no Container
      name: "microCardapio",

      // Arquivo que o Container carrega para descobrir os módulos expostos
      filename: "remoteEntry.js",

      // Módulos que este micro disponibiliza para outros apps
      exposes: {
        "./CardapioApp": "./src/CardapioApp",
      },

      // Compartilha React para evitar duplicação
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
      title: "Micro Cardápio (standalone)",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
