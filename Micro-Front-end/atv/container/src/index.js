/**
 * index.js - Ponto de entrada do Container
 *
 * Importa o bootstrap de forma dinâmica (async import) para que o
 * Webpack Module Federation tenha tempo de negociar as dependências
 * compartilhadas antes de executar o código da aplicação.
 */
import("./bootstrap");
