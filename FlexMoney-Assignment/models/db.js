const mongoose = require("mongoose");
require("dotenv").config();

const db = "WuvKSjelnTVJ6ISa";

mongoose.connect(
  `mongodb+srv://ronney21:${db}@cluster0.7azhh.mongodb.net/flexmoney?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require("./userModel");
