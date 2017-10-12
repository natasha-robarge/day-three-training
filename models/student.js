const mongoose = require(`mongoose`);

const studentModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },

  passing: boolean,
  course: String,
  dob: Date,

  email: {
    type: String,
    required: true,
    unique: true
  }
})

const Student = modules.exports(`Student`, studentModel);
