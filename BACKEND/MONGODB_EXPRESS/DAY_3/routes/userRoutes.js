const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { createUserWithImage } = require("../controllers/userController");

router.post("/add", upload.single("image"), createUserWithImage);

module.exports = router;