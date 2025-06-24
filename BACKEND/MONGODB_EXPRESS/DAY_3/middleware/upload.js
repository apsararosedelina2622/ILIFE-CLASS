const multer = require("multer");

const storage = multer.memoryStorage(); // Store in RAM
const upload = multer({ storage: storage });

module.exports = upload;
