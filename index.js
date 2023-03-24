const express = require("express");

const dotenv=require('dotenv');

const bodyParser = require("body-parser");

const db = require("./config/db");
dotenv.config();

const app = express();


app.use(express.json());
app.use("/", require("./Routes/index"));

app.listen(8000, function (err) {
  if (err) {
    console.log("Couldnt connetct");
    return;
  }
  console.log("app is running on port", 8000);
});
