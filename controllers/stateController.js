const State = require("../model/stateModel");
const City = require("../model/cityModel");

module.exports.create = async function (req, res) {
  try {
    let { state, cities } = req.body;
    cities = JSON.parse(cities);
    const createdState = await State.create({
      state: state,
    });
    for (let city of cities) {

      const createdCity = await City.create({
        city: city.city,
      });

      const updatedState = await State.findByIdAndUpdate(createdState.id, {
        $push: { cities: createdCity.id },
      });
    }
    const UpdatedState = await State.findOne({
      _id: createdState._id,
    }).populate("cities");
    res.send(UpdatedState);

  } catch (err) {
    console.log(err);
    res.end("inernal sever error");
  }
};

module.exports.get = async function (req, res) {
  try {
    const { state } = req.body;
    const FoundState = await State.find({ state: state }).populate("cities");
    res.status(200).json(FoundState);
  } catch (err) {
    console.log(err);
    return res.send("Internarl server error");
  }
};
