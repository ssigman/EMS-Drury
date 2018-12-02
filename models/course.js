// models/course.js
var db = require("../db");

var Course = db.model("Course", {
    dept:          String,
    number:        String,
    name:          String,
    desc:          String,
    creditHr:      {type: Number, min: 0, max: 6}
});

module.exports = Course;