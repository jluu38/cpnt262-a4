// modules
const express = require('express');
const app = express();
app.set("view engine", "ejs");
const index = require("./routes/index");

const path = require("path");
require("dotenv").config();

// static file serving middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// app.use("/comingsoon", comingsoon)

// 404 error page


// env variables w/ default port
const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on ${HOST}:${PORT}`);
});