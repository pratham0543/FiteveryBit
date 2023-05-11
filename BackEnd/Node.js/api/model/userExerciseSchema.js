const mongoose = require("mongoose");
const userExerciseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userid: mongoose.Schema.Types.String,
  chest: {
    type: Map,
    of: Object
  },
  legs: {
    type: Map,
    of: Object
  },
  biceps: {
    type: Map,
    of: Object
  },
  triceps: {
    type: Map,
    of: Object
  },
  abs: {
    type: Map,
    of: Object,
  },
  shoulder: {
    type: Map,
    of: Object,
  }
});
module.exports = mongoose.model("userExerciseSchema", userExerciseSchema);
