const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@docs': path.resolve(__dirname, './docs')
    }
  },
  entry: path.resolve('./docs/entry.tsx'),
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    chunkFilename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['happypack/loader?id=ts'],
        include: [path.resolve('components'), path.resolve('docs')],
        exclude: [/__tests__/],
      },
      {
        test: /\.(css|less)$/,
        use: ['happypack/loader?id=css'],
        include: [
          path.resolve('scripts'),
          path.resolve('docs'),
          path.resolve('node_modules/prismjs/themes/'),
          path.resolve('node_modules/yoshino/'),
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: ['url-loader'],
      },
      {
        test: /\.md$/,
        use: ['raw-loader'],
      },
    ]
  },
  devtool: 'source-map',
  optimization: {
    splitChunks:  {
      chunks: 'all',
      minChunks: 3,
      name: 'common',
    },
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./docs/index.html'),
      favicon: path.resolve('./docs/favicon.ico'),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HappyPack({
      id: 'ts',
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true,
          },
        },
        {
          loader: 'ui-component-loader',
          options: {
            'lib': 'yoshino',
            'libDir': 'lib',
            'style': 'style/index.js',
          },
        },
      ]
    }),
    new HappyPack({
      id: 'css',
      loaders: ['css-hot-loader', 'style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build"),
    compress: false,
    port: 9000,
    hot: true,
  },
};
