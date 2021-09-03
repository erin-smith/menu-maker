const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(routes);

// Connect to the Mongo DB
const uri = process.env.ATLAS_URI;
mongoose.connect( uri || "mongodb://localhost/menumakerdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection is a success!")
// })

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
