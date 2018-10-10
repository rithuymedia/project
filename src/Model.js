const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signatureSchema = new Schema({
  guestSignature: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
  //   age: {
  //     type: Number,
  //     required: true
  //   }
});
const Signature = mongoose.model("Signature", signatureSchema);

module.exports = Signature;
