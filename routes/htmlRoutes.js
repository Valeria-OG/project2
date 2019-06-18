var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Dog.findAll({}).then(function(dbExamples) {
      console.log (dbExamples)
      res.render("index", {
        msg: "Welcome to Dog Home!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/dog/:id", function(req, res) {
    db.Dog.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("dog", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
