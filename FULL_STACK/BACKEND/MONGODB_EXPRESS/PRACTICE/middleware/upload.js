const multer = require("multer")
const path = require("path")

const upload = multer({
    storage : multer.diskStorage({
        destination : (req , file , cb) => cb(null , path.join(__dirname , "../uploads")),
        filename : (req , file , cb) => cb(null , `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    })
})

module.exports = upload