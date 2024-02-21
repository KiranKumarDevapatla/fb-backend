const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config( './.env');
// Access your MongoDB connection string from secrets
const mongoURI = process.env.MONGODB;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });