const express = require("express");
const nunjucks = require("nunjucks");
const courses = require("./data");

const server = express();

server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  autoescape: false,
});

server.use(express.static("public"));

server.get("/", function (req, res) {
  return res.render("index");
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/courses", function (req, res) {
  return res.render("courses", {courses});
});

server.use(function (req, res) {
  return res.status(404).render("not-found");
});

server.listen(5000, function () {
  console.log("server is running");
});
