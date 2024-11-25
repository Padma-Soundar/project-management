const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const mongoose = require("mongoose");


console.log("Current directory:", __dirname);
console.log("Environment variables loaded:", process.env.MONGO_URI ? "Yes" : "No");
console.log("MONGO_URI:", process.env.MONGO_URI);
//console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo db connected successfully");
});

connection.on("error", (err) => {
  console.log("Mongo db connection error: ", err);
});

module.exports = mongoose;
