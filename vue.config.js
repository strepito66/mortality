const webpack = require('webpack');

module.exports = {
  pages: {
    tab: {
      template: "public/browser-extension.html",
      entry: "./src/tab/tab.js",
      title: "New Tab",
      filename: "tab.html",
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {},
      artifactFilename: ({ name, version }) => `${name}-v${version}.zip`,
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      })
    ],
    // Webpack 4 compatible configuration
    node: {
      crypto: true,
      stream: true,
      Buffer: true
    }
  }
};