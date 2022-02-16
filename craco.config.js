const path = require('path')
// path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');// 如果当前工作目录为 /home/myself/node，// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
const resolve = (dir) => path.resolve(__dirname, dir)
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const prdPlugins = []
if (process.env.NODE_ENV === 'production') {
  prdPlugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new BundleAnalyzerPlugin(),
    new SimpleProgressWebpackPlugin()
  )
}
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    plugins: [...prdPlugins]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    historyApiFallback: true
  }
}
