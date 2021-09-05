const db = require("../models");

// Defining methods for the menuController
module.exports = {
  findAll: function(req, res) {
    db.Menu.find({}).then(dbModel => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Menu
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Menu
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("updating", req.body);
    db.Menu
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteOne: function(req, res) {
    db.Menu
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.deleteOne())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
