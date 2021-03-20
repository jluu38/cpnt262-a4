const express = require("express");
const Router = express.Router();

const randomColor = require("randomcolor");
let color = randomColor();

Router.use(function (request, response, next) {
  response.locals = {
    siteTitle: "100 Cinema",
    tagline: "One auditorium. One hundred seats.",
    copyright: "&copy; 2021 Jess Luu. MIT License."
  }
  next();
})

Router.get("/", function (request, response) {
  response.render("pages/index", {
    pageTitle: "Coming Soon.",
    color: color
  });
})

Router.get("/comingsoon", function (request, response) {
  response.render("pages/comingsoon", {
    pageTitle: "Coming Soon.",
    color: color
  });
})

Router.get("/login", function (request, response) {
  response.render("pages/login", {
    pageTitle: "Login.",
    color: color
  });
})

Router.get("*", function (request, response) {
  response.status(404);
  response.render("pages/404", {
    pageTitle: "404 Error.",
    color: color
  });
})

module.exports = Router;