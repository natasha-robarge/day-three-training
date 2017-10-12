const mongoose = require(`mongoose`);

const courseModel = new mongoose.Schema ({
  name: String,
  instructors: {
    type: [ Schema.type.objectID ],
    ref: `instructors`
  },
  students: {
    type: [ Schema.type.objectID ],
    ref: `students`
  }
});

const Course = module.exports(`Course`, courseModel);
