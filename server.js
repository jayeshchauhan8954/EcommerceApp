const express = require('express');
let bodyParser = require("body-parser");

const serverConfig = require('./config/server.config');
const router = require("./routes/index");
const expressApp = express();
expressApp.use(bodyParser.JSON());
expressApp.use(router);

expressApp.listen(serverConfig.PORT,() => {
    console.log("server is running on port " + serverConfig.PORT)
})
