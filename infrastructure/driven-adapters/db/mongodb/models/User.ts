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
  },
  personalInformation: {
    firstName: {
      type: String
    },
    surname: {
      type: String
    },
    sex: {
      type: String
    },
    documentType: {
      type: String
    },
    documentNumber: {
      type: String
    },
    phoneNumberCountryCode: {
      type: String
    },
    phoneNumber: {
      type: String
    }
  }
});

module.exports = model('User', userSchema);