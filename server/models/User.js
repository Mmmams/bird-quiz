const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  currentLevel: { type: Number, required: true },
  currentScore: { type: Number, required: true },
});

module.exports = model("User", schema);
