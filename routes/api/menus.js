const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/menus"
router.route("/")
  .get(menuController.findAll)
  .post(menuController.create);

// Matches with "/api/menus/:id"
router
  .route("/:id")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.deleteOne);

module.exports = router;