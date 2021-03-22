const express = require("express");
const Router = express.Router();
const images = require("../../data/images");

Router.get("/", function(request, response) {
  response.json(images);
})

module.exports = Router;