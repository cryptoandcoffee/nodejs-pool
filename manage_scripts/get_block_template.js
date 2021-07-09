"use strict";

const argv = require('minimist')(process.argv.slice(2));

if (!argv.port) {
	console.error("Please specify port");
	process.exit(1);
}
const port = argv.port;

require("../init_mini.js").init(function() {
  global.coinFuncs.getPortBlockTemplate(port, function (body_header) {
    console.log("body:" + JSON.stringify(body_header));
    process.exit(0);
  });
});
