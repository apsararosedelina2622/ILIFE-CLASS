const multer = require("multer");

const storage = multer.memoryStorage(); // not saving in folder
const upload = multer({ storage: storage });

module.exports = upload;
