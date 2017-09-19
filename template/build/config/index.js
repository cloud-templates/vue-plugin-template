var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../../', 'dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  directory: {
    root: path.resolve(__dirname, '../../'),
    src: path.resolve(__dirname, '../../', 'src')
  }
}
