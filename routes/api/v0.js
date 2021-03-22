const express = require("express");
const Router = express.Router();
const images = require("../../data/images");

Router.get("/images", function(request, response) {
  response.json(images);
})

// module.exports = images;
module.exports = Router;