const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundlefile.js'
    //publicPath: '/public'
  },
  /*resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },*/
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        }
      },
      /*{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },*/
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
	static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    hot: 'only',
    open : true
    //port: 4001,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon/favicon.ico',
      manifest: './public/manifest.json',
      filename: 'index.html',
    }),
  ]
}