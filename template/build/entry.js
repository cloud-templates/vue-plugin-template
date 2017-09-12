const vue = require('rollup-plugin-vue');
const less = require('rollup-plugin-less');
const replace = require('rollup-plugin-replace');
const buble = require('rollup-plugin-buble');
const alias = require('rollup-plugin-alias');
const resolve = require('rollup-plugin-node-resolve');
const banner = require('./banner');
const pack = require('../package.json');


function toUpper (_, c) {
  return c ? c.toUpperCase() : '';
}

const classifyRE = /(?:^|[-_\/])(\w)/g;
function classify (str) {
  return str.replace(classifyRE, toUpper);
}
const moduleName = classify(pack.name);

const entries = {
  // Runtime only (CommonJS). Used by bundlers e.g. Webpack & Browserify
  commonjs: {
    entry: 'src/index.js',
    dest: `dist/${pack.name}.common.js`,
    format: 'cjs',
    banner
  },
  // Runtime only (ES Modules). Used by bundlers that support ES Modules,
  // e.g. Rollup & Webpack 2
  esm: {
    entry: 'src/index.js',
    dest: `dist/${pack.name}.esm.js`,
    format: 'es',
    banner
  },
  // runtime-only production build (Browser)
  production: {
    entry: 'src/index.js',
    dest: `dist/${pack.name}.min.js`,
    format: 'umd',
    env: 'production',
    moduleName,
    banner
  },
  // runtime-only build (Browser)
  development: {
    entry: 'src/index.js',
    dest: `dist/${pack.name}.js`,
    format: 'umd',
    env: 'development',
    moduleName,
    banner
  }
}

function genConfig (opts) {
  const config = {
    entry: opts.entry,
    dest: opts.dest,
    format: opts.format,
    banner: opts.banner,
    moduleName,
    plugins: [
      resolve(),
      vue({
        autoStyles: false,
        styleToImports: true,
        transforms: { stripWith: false }
      }),
      less({
        insert: true
      }),
      buble(),
      alias(Object.assign({}, require('./alias'), opts.alias))
    ],
    external: [
      'vue',
      'axios'
    ],
    globals: {
      'vue': 'vue',
      'axios': 'axios'
    }
  };

  const replacePluginOptions = { '__VERSION__': pack.version };
  if (opts.env) {
    replacePluginOptions['process.env.NODE_ENV'] = JSON.stringify(opts.env);
  }
  config.plugins.push(replace(replacePluginOptions));

  return config;
}

exports.getEntry = name => genConfig(entries[name]);
exports.getAllEntries = () => Object.keys(entries).map(name => genConfig(entries[name]));
