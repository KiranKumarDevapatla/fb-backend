const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    clientID: {
      type: String,
    },
    conversations: [],
  },
  {
    timestamps: true,
  },
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
