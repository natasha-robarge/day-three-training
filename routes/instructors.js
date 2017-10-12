const db = require(`..models/instructor`);

function getInstructors(req, res) {
  db.Instructor.find({}, (err, instructorData) => {
    if (err) {
      res.sendStatus(500).send(`Error found, ${err}`);
    }
    res.json(instructorData);
  })
}

function createNewInstructor(req, res) {
  const newInstructor = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "isOnVacation": req.body.isOnVacation,
    "course": req.body.course,
    "dob": req.body.dob,
    "email": req.body.email
  }

  newInstructor.save((err, savedInstructor) => {
    if (err) {
      res.sendStatus(500).send(`Error found, ${err}`);
    }
    res.json(savedInstructor);
  });
}

function getInstructor(req, res) {
  db.Instructor.findOne({ _id: req.params.id }, (err, foundInstructor) => {
    if (err) {
      res.sendStatus(500).send(`Error retrieving instructor, ${err}`);
    }
    res.json(foundInstructor);
  });
}

function updateInstructor(req, res) {
  db.Instructor.findByIdAndUpdate({_id: req.params.id}, (err, updatedInstructor) => {
    if (err) {
      res.sendStatus(500).send(`Error updating instructor, ${err}`);
    }
    res.json(updatedInstructor);
  });
}

function removeInstructor(req, res) {
  db.Instructor.findByIdAndRemove({_id: req.params.id}, (err, removedInstructor) => {
    if (err) {
      res.sendStatus(500).send(`Error removing instructor, ${err}`);
    }
    res.json(removedInstructor);
  });
}

module.exports = {
  getInstructors: getInstructors,
  createNewInstructor: createNewInstructor,
  getInstructor: getInstructor,
  updateInstructor: updateInstructor,
  removeInstructor: removeInstructor
}
