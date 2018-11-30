// server.js
var express = require("express");
var app = express();

// Serve static files from the public dir
app.use(express.static("public"));

// Start the web server on port 3000
app.listen(3000);