// webpack.config.js - Container App
// Responsável por orquestrar os micro frontends via Module Federation

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  output: {
    // Garante que os chunks remotos sejam carregados corretamente
    publicPath: "http://localhost:3000/",
  },

  devServer: {
    port: 3000,
    hot: true,
    // Necessário para roteamento SPA
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        // Transpila JSX e JS moderno com Babel
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
        // Processa arquivos CSS
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      // Declara os micros remotos que serão consumidos
      remotes: {
        // micro-cardapio rodando na porta 3001
        microCardapio: "microCardapio@http://localhost:3001/remoteEntry.js",
        // micro-pedido rodando na porta 3002
        microPedido: "microPedido@http://localhost:3002/remoteEntry.js",
      },
      // Compartilha React para evitar múltiplas instâncias
      shared: {
        react: {
          singleton: true,        // Uma única instância compartilhada
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
      title: "Restaurante App - Container",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
