var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/dogs", function(req, res) {
    db.Dog.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/dogs", function(req, res) {
    db.Dog.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/dogs/:id", function(req, res) {
    db.Dog.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
