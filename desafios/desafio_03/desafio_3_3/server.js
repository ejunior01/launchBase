const express = require("express");
const nunjucks = require("nunjucks");
const courses = require("./data");

const server = express();
const port = 5000

server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
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

server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

	const course = courses.find(function(course){
		if (course.id == id) {
			return true
			}
	})
	
	if(!course) {
		return res.send("Course not found")
	}

  return res.render("course", {course})

});

server.use(function (req, res) {
  return res.status(404).render("not-found");
});

server.listen(port, function () {
  console.log("server is running");
});
