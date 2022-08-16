const mongoose = require("mongoose");
require("colors");

//ConnecDB connection

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

//export the connectDB function

module.exports = connectDB;
