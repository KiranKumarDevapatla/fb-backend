const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// Access your MongoDB connection string from secrets
const mongoURI = "mongodb+srv://devapatlakirankumar:Kiran2601@cluster0.gl55jzn.mongodb.net/FBHELPDESK";
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
  
