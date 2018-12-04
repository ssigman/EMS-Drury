// models/course.js
var db = require("../db");

var ObjectId = db.Schema.Types.ObjectId;

var Course = db.model("Course", {
    _id:           ObjectId,
    dept:          String,
    number:        String,
    name:          String,
    desc:          String,
    creditHr:      {type: Number, min: 0, max: 6}
});

module.exports = Course;