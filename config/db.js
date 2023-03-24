const mongoose = require("mongoose");
require('dotenv').config();

try {
  const connect = async () => {
    await mongoose.connect(process.env.MONGO_URL)
      .then(() => {
        console.log("mongoose Rom connect to db");
      });
  };
  connect();
} catch (err) {
  console.log("could t connect", err);
}

module.exports = mongoose;
