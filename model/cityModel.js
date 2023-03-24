const mongoose = require("mongoose");
const CitySchema = new mongoose.Schema({
  city: {
    type: String,
    require: true,
  },
});
const City = mongoose.model("City", CitySchema);
module.exports = City;
