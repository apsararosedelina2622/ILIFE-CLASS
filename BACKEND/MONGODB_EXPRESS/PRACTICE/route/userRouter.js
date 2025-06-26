const express = require("express")
const upload = require("../middleware/upload")
const router = express.Router()

router.post("/add" , upload.single("image"))

module.exports = router