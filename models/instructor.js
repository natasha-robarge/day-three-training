const mongoose = require(`mongoose`);

const instructorSchema = new mongoose.Schema ({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },

  isOnVacation: boolean,
  course: String,
  dob: Date,

  email: {
    type: String,
    required: true,
    unique: true
  }
})

const Instructor = module.exports(`Instructor`, instructorSchema);
