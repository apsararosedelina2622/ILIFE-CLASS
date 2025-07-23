const multer = require("multer")

const path = require("path")

const upload = multer({
    storage : multer.diskStorage({
        destination : (req , file , cb) => cb(path.join(__dirname , "../uploads"))
    })
})