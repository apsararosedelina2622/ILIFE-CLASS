const User = require("../models/User");

const createUserWithImage = async (req, res) => {
  try {
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

// Optional: Get image by ID
const getImage = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.contentType(user.image.contentType);
    res.send(user.image.data);
  } catch (err) {
    res.status(404).send("Image not found");
  }
};

module.exports = { createUserWithImage, getImage };
