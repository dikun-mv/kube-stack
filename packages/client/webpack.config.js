const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Web App'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3003,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
