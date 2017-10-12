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
  const newCourse = {
    "name": req.body.name,
    "instructors": req.body.instructors,
    "students": req.body.students
  }

  newCourse.save({}, (err, savedCourse) => {
    if (err) {
      res.sendStatus(500).send(`Could not save course in database, ${err}`);
    }
    res.json(savedCourse);
  });
}

function getCourse(req, res) {
  db.Course.findOne({_id: req.params.id}, (err, foundCourse) => {
    if (err) {
      res.sendStatus(500).send(`Could not get course, ${err}`);
    }
    res.json(foundCourse);
  });
}

function updateCourse(req, res) {
  db.Course.findByIdAndUpdate({_id: req.params.id}, (err, updatedCourse) => {
    res.sendStatus(500).send(`Could not update course, ${err}`);
  });
  res.json(updatedCourse);
}

function removeCourse(req, res) {
  db.Course.findByIdAndRemove({_id: req.params.id}, (err, removedCourse) => {
    if (err) {
      res.sendStatus(500).send(`Could not remove course, ${err}`);
    }
    res.json(removedCourse);
  });
}

module.exports = {
  getCourses: getCourses,
  createNewCourse: createNewCourse,
  getCourse: getCourse,
  updateCourse: updateCourse,
  removeCourse: removeCourse
}
