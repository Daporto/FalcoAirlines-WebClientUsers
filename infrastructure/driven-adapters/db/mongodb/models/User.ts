const { Schema, model, ObjectId } = require("mongoose");

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = model("User", userSchema);