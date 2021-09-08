const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({limit: '50mb'}));
app.use(express.json());

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
  })
  .then(() => {
    console.log("Connected to the database!");
    })
  .catch (err => {
    console.log("cannot connect to database!", err);
    process.exit();
  });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
