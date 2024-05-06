const mongoose = require("mongoose");

const URI = process.env.DB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Your DB Connection Successfull");
  } catch (error) {
    console.error("database Connection Failed");
    process.exit(0);
  }
};
module.exports = connectDb;
