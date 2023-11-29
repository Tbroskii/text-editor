const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Path to your HTML template
        chunks: ['main', // Specify which chunks to include in this HTML file
    ],

    new WebpackPwaManifest({
      name: 'Your App Name',
      short_name: 'Your App',
      description: 'Description of your app',
      background_color: '#ffffff',
      theme_color: '#000000',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/img/icon.png'), // Path to your app icon
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),

    module: {
      rules: [
        
      ],
    },
  };
};
