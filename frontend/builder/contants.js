const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '..')
module.exports = {
  ROOT_PATH,
  DIST_PATH: path.resolve(ROOT_PATH, 'dist'),
  SRC_PATH: path.resolve(ROOT_PATH, 'src')
}