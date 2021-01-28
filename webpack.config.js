const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/main.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[fullhash].js',
  },
  devtool: isDev ? 'inline-source-map' : false,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|jpg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
