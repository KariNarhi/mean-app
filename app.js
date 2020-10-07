const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// Connect to MongoDB
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// On connection
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected, database => " + config.database);
});

// On error
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

const app = express();
// CORS middleware
app.use(cors());

const users = require("./routes/users");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Express JSON parser
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

// Index route
app.get("/", (req, res) => {
  res.send("Invalid endpoint!");
});

// Port number
const port = 3000;

// Start server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
