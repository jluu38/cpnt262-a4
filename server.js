// modules
const path = require("path");
require("dotenv").config();

const express = require('express');
const app = express();
app.set("view engine", "ejs");

const index = require("./routes/index");

const api = require("./routes/api/v0");






// static file serving middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// env variables w/ default port
const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on ${HOST}:${PORT}`);
});