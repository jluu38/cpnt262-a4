const express = require("express");
const Router = express.Router();
const api = require("./api/v0");

// random colour generator for site title
const randomColor = require("randomcolor");
const color = randomColor();

Router.use(function (request, response, next) {
  response.locals = {
    siteTitle: "100 Cinema",
    tagline: "One auditorium. One hundred seats.",
    copyright: "&copy; 2021 Jess Luu. MIT License.",
    color: color
  }
  next();
})

Router.get("/", function (request, response) {
  response.render("pages/index", {
    pageTitle: "Coming Soon."
  });
})

Router.get("/comingsoon", function (request, response) {
  response.render("pages/comingsoon", {
    pageTitle: "Coming Soon.",
  });
})

Router.get("/login", function (request, response) {
  response.render("pages/login", {
    pageTitle: "Login."
  });
})

Router.get("/register", function (request, response) {
  response.render("pages/register", {
    pageTitle: "Register."
  });
})

Router.use("/api/v0/", api);

Router.get("*", function (request, response) {
  response.status(404);
  response.render("pages/404", {
    pageTitle: "404 Error."
  });
})

module.exports = Router;