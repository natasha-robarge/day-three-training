const db = require(`../models/student`);

function getAllStudents(req, res) {
  db.Student.find({}, (err, foundStudents) => {
    if (err) {
      res.sendStatus(500).send(`Could not load students, ${err}`);
    }
    res.json(foundStudents);
  });
}

function createNewStudent(request, response) {
  const newStudent = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "passing": req.body.passing,
    "course": req.body.course,
    "dob": req.body.dob,
    "email": req.body.email
  }

  newStudent.save({}, (err, savedStudent) => {
    if (err) {
      res.sendStatus(500).send(`Could not save student, ${err}`);
    }
    res.json(savedStudent);
  });
}

function getStudent(req, res) {
  db.Student.findOne({_id: req.params.id}, (err, foundStudent) {
    if (err) {
      res.sendStatus(500).send(`Could not get student, ${err}`);
    }
    res.json(foundStudent);
  });
}

function updateStudent(req, res) {
  db.Student.findByIdAndUpdate({_id: req.params.id}, (err, updatedStudent) => {
    if (err) {
      res.sendStatus(500).send(`Could not update student, ${err}`);
    }
    res.json(updatedStudent);
  });
}

function removeStudent(req, res) {
  db.Student.findByIdAndRemove({_id: req.params.id}, (err, removedStudent) => {
    if (err) {
      res.sendStatus(500).send(`Could not remove student, ${err}`);
    }
    res.json(removedStudent);
  });
}

module.exports = {
  getAllStudents: getAllStudents,
  createNewStudent: createNewStudent,
  getStudent: getStudent,
  updateStudent: updateStudent,
  removeStudent: removeStudent
}
