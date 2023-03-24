const mongoose = require("mongoose");
const StateSchema = new mongoose.Schema({
  state: {
    type: String,
    require: true,
    unique: true,
  },
  cities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
  ],
});
const State = mongoose.model("State", StateSchema);
module.exports = State;
