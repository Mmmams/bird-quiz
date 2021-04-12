const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  species: { type: String },
  description: { type: String },
  image: { type: String },
  audio: { type: String },
});

module.exports = mongoose.model("Bird", schema);
