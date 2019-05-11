const path = require('path');

const SRC_PATH    = path.resolve(__dirname, '../src');
const PUBLIC_PATH = path.resolve(__dirname, '../public');

module.exports = {
  entry: {
    main: SRC_PATH + '/index.js'
  },

  output: {
    filename: '[name].js',
    path: PUBLIC_PATH + '/dist/js/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.(vert|frag|glsl)$/,
        use: {
          loader: 'webpack-glsl-loader'
        }
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
};