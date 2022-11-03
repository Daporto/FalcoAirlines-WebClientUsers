const { Schema, model, ObjectId } = require("mongoose");

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = model("User", userSchema);