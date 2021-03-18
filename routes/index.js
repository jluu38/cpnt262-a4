const express = require("express");
const Router = express.Router();
// const ejsLint = require("ejs-lint");
// ejsLint()



Router.use(function(request, response, next) {
    response.locals = {
      siteTitle: "100 Cinema",
      tagline: "100 seats.",
      copyright: "&copy; 2021 Jess Luu. MIT License."
    }
    next();
  })

  Router.get("/", function(request, response) {
    response.render("pages/index", {pageTitle: "Coming Soon."});
  })

  Router.get("/comingsoon", function(request, response) {
    response.render("pages/comingsoon", {pageTitle: "Coming Soon."});
  })

  Router.get("/login", function(request, response) {
    response.render("pages/login", {pageTitle: "Login."});
  })

  Router.get("*", function(request, response) {
      response.status(404);
      response.render("pages/404", {pageTitle: "404 Error."});
    })

  module.exports = Router;