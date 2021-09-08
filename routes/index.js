const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const multer = require("multer");
const { Menu } = require("../models");

const storage = multer.diskStorage({
  destination: (reg, file, callback) => {
    callback(null, "./client/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})

const upload = multer({storage: storage});

router.post("/add", upload.single("photo"), (req, res) => {
  const newImage = new Menu({
    photo: req.file.photo
  })
});

router.put("/update/:id", upload.single("photo"), (req, res) => {
  Menu.findById(req.params.id)
  .then((photo) => {
    photo.photo= req.file.originalname
  })
});

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
