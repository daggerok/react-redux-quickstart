const { join } = require('path');
const pathTo = rel => join(process.cwd(), rel);

const { version } = require('./package.json');
const assets = /\.(woff2?|eot|ttf|svg|ico|jpe?g|png|gif|raw)$/i;

const styleLoaders = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
    },
  },
  'postcss-loader',
];

const isProd = env => 'development' !== env;
const publicPath = env => 'ghpages' === env ? '/react-redux-quickstart/' : '/';

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const { optimize } = webpack;

process.traceDeprecation = true;

module.exports = env => ({

  context: pathTo('.'),

  entry: {
    vendors: './src/vendors.js',
    app: './src/main.js',
  },

  output: {
    jsonpFunction: 'w',
    path: pathTo('./dist'),
    publicPath: publicPath(env),
    filename: '[name].js?v=' + version,
    chunkFilename: '[name].[id].[hash].js?v=' + version,
  },

  module: {
    rules: [
      // scripts
      {
        test: /\.jsx?$/i,
        loader: 'babel-loader',
        include: pathTo('./src'),
        options: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: [
                    'last 4 versions',
                    'ie >= 7'
                  ],
                  node: [
                    6,
                    7,
                    'current'
                  ]
                }
              }
            ],
            'es2015-node5',
            'stage-0',
            'react'
          ],
          plugins: [
            'transform-decorators-legacy'
          ],
        },
      },
      // styles
      {
        test: /\.css$/i,
        use: styleLoaders,
      },
      {
        test: /\.styl$/i,
        use: [
          ...styleLoaders,
          'stylus-loader',
        ],
      },
      // project assets
      {
        test: assets,
        include: pathTo('./src'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'resources/[1]?v=' + version,
            regExp: /\/src\/(.*)/,
          },
        },
      },
      // vendors
      {
        test: assets,
        include: /\/node_modules\//i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'vendors/[1]?v=' + version,
            regExp: /\/node_modules\/(.*)/,
          },
        },
      },
      // all other
      {
        test: assets,
        exclude: [
          pathTo('./src'),
          /\/node_modules\//i,
        ],
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'resources/[path][name].[ext]?v=' + version,
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.styl',
    ],
  },

  plugins: [

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: () => [
            require('autoprefixer')([
              'last 4 versions',
            ]),
          ],
        },
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProd(env) ? 'production' : 'development'),
        ENV: JSON.stringify(env),
      },
    }),

    new webpack.NoEmitOnErrorsPlugin(),

    isProd(env) ? new optimize.AggressiveMergingPlugin() : undefined,

    new optimize.CommonsChunkPlugin({
      names: [
        'app',
        'vendors',
        'manifest',
      ],
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: isProd(env) ? {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      } : false,
    }),

    new BaseHrefWebpackPlugin({
      baseHref: publicPath(env),
    }),

    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),

    new CompressionWebpackPlugin({
      asset: '[path].gz?[query]',
    }),

  ].filter(p => !!p),

  devServer: {
    port: 8000,
    historyApiFallback: true,
  },

});
