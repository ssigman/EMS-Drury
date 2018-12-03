// api/courses.js
// Defines a REST api for the courses database
// API Functions
// get 

var Course = require("../models/course");
var router = require("express").Router();

// Get a list of all the courses. 
// Call is localhost:3000/courses?dept=xxxx
// where xxxx is replaced by a dept code or
// leave blank to get all courses

router.get("/", function(req, res) {
    var query = {};
    
    // set up the query
    if (req.query.dept != "") {
        query = { dept: {$eq: req.query.dept }};
    }
    
    Course.find(query,function(err, courses) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(courses);
        }
    });
});

// TO DO: Add other API routes here

module.exports = router;