const router = require("express").Router();
const menuRoutes = require("./apiRoutes");

// Book routes
router.use("/menu", menuRoutes);

module.exports = router;
