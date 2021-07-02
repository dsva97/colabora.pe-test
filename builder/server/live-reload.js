const connectLivereload = require("connect-livereload");
const livereload = require("livereload");
const { DIST_PATH } = require('../contants')


const liveReloadServer = livereload.createServer();
liveReloadServer.watch(DIST_PATH);

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

module.exports = connectLivereload;