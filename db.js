// db.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/university", { useNewUrlParser: true });
module.exports = mongoose;