const nodemon = require('nodemon');
const path = require('path')
const { ROOT_PATH, SRC_PATH } = require('./contants')
require('./server');

nodemon({
  script: path.resolve(ROOT_PATH, 'builder', 'builder.js'),
  watch: SRC_PATH,
  ext: "jsx js css scss"
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});