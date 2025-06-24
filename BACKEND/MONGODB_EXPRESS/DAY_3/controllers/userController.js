const User = require("../models/User");

const createUserWithImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const user = new User({
      name: req.body.name,
      age: req.body.age,
      place: req.body.place,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });

    await user.save();
    res.status(201).json({ message: "User added with image!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUserWithImage };
