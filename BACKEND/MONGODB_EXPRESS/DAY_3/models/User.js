const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  place: String,
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model("User", userSchema);
