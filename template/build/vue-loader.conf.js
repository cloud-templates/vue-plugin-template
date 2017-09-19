var utils = require('./utils')
var config = require('./config')
var isProduction = utils.isProduction()

module.exports = {
  // 为了去掉元素间的空格
  preserveWhitespace: false,
  autoprefixer: {
    browsers: ["Android >= 2.3", "iOS >= 4"], //, "ChromeAndroid > 1%"
    cascade: false // 不美化输出 css
  },
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
