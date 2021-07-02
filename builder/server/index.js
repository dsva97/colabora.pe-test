const connectLivereload = require("./live-reload");
const express = require('express');
const path = require('path');
const { DIST_PATH } = require('../contants')

const PORT = process.env.PORT || 3033

const app = express();

app.use(connectLivereload())

app.use(express.static(DIST_PATH))

app.get("*", (req, res) => res.sendFile(path.resolve(DIST_PATH, 'index.html')))

app.listen(PORT, () => console.log(`Running in port ${PORT}.`))