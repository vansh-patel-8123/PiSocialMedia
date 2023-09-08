const mongoose = require("mongoose");

const dbConnection = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected!!!");
  } catch (error) {
    console.log(error + " Database connection have issue !!!");
    process.exit(1);
  }
};

module.exports = dbConnection;
