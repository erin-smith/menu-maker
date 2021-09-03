const router = require("express").Router();
const menuRoutes = require("./menus");

// Menu routes
router.use("/menus", menuRoutes);

module.exports = router;
