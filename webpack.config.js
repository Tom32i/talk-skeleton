const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const buildPath = require('path').resolve(__dirname, 'build');

module.exports = {
  target: 'web',
  entry: './assets/js/index.js',
  output: {
    filename: 'talk.js',
    path: buildPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(svg|jpe?g|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new CopyPlugin({
      patterns: [
        { from: 'assets/img/', to: 'img' },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: buildPath,
    },
    hot: false,
    compress: true,
    port: 8032,
  },
};
