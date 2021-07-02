const path = require('path')
const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin')
const { DIST_PATH, SRC_PATH } = require('./contants')

const isProduction = process.env.NODE_ENV === 'production'

esbuild.build({
  entryPoints: [path.resolve(SRC_PATH, 'index.jsx')],
  bundle: true,
  minify: isProduction,
  sourcemap: isProduction,
  outfile: path.resolve(DIST_PATH, 'bundle.js'),
  write: true,
  plugins: [
    cssModulesPlugin()
  ],
  logLevel: 'info'
}).then((result) => {
  console.log('Result of compiler: ',result)
}).catch(console.error)