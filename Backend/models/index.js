const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.MONGODB_URI; // Get the MongoDB URI from environment variables
console.log("MongoDB URI:", dbUrl); // Log the MongoDB URI for debugging

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(`MongoDB connection error : ${err}`));

module.exports = {
  Campaign: require("./Campaign"),
  Donation: require("./Donation"),
  User: require("./User"),
  Token: require("./Token"),
  Query: require("./Query"),
};
