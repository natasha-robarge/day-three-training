const db = require(`../models/course`);

function getCourses(req, res) {
  db.Course.find({}, (err, foundCourses) => {
    if (err) {
      res.sendStatus(500).send(`Could not get courses list, ${err}`);
    }
    res.json(foundCourses);
  })
}

function createNewCourse(req, res) {

}

function getCourse(req, res) {

}

function updateCourse(req, res) {

}

function removeCourse(req, res) {

}

module.exports = {
  getCourses: getCourses,
  getCourse: getCourse,
  createNewCourse: createNewCourse,
  updateCourse: updateCourse,
  removeCourse: removeCourse
}
