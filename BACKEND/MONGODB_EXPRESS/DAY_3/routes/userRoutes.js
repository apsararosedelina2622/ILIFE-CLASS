const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { createUserWithImage, getImage } = require("../controllers/userController");

router.post("/add", upload.single("image"), createUserWithImage);
router.get("/image/:id", getImage);

module.exports = router;
