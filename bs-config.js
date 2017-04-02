const historyApiFallback = require('connect-history-api-fallback');
const webpackGhpagesConfig = require('./webpack.config')('ghpages');
const { path, publicPath } = webpackGhpagesConfig.output;

module.exports = {
  server: {
    always: publicPath + 'index.html',
    baseDir: path,
    middleware: [
      historyApiFallback({
        index: publicPath + 'index.html',
      }),
    ],
  },
  files: [
    path + 'index.html',
    path + '**/*.*',
  ],
  startPath: publicPath,
  serveStatic: [
    path,
  ],
};
