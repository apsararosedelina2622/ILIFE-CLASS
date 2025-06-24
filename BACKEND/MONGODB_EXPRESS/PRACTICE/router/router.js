const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload")

router.post("/add" , upload.single("image"))