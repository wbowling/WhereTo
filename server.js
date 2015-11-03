var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.output.path,
  hot: true,
  historyApiFallback: true
}).listen(8080, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at 0.0.0.0:8080')
})
