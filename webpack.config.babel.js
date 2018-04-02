import HtmlWebPackPlugin from 'html-webpack-plugin';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = 'prod';

const cssLoaderOptions = {
  modules: true,
  importLoaders: 1,
  localIdentName: '[name]_[local]_[hash:base64]',
  sourceMap: true,
  minimize: true
};

const rules = [
  {
    test: /\.(jsx|js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }
];

if (env === 'prod') {
  rules.push({
    test: /\.scss/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: cssLoaderOptions
        },
        {
          loader: 'sass-loader'
        }
      ]
    })
  });
} else {
  rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: cssLoaderOptions
      },
      {
        loader: 'sass-loader'
      }
    ]
  });
}

const plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new HtmlWebPackPlugin({
    title: 'Custom template',
    initialState: JSON.stringify({
      device: {
        isMobile: true
      }
    }),
    template: './src/index.html',
    filename: './index.html'
  }),
  new ExtractTextPlugin({
    allChunks: true,
    filename: './css/[name].css'
  })
];

if (env !== 'prod') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  target: 'web',
  plugins,
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
};
