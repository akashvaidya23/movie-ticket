const mongoose = require("mongoose");

const userSchemas = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
});

module.exports = mongoose.model("users", userSchemas);
