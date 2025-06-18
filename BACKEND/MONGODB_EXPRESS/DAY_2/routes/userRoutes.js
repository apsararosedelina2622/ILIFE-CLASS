const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Routes
router.post("/create", createUser);
router.get("/users", getUsers);
router.get("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;