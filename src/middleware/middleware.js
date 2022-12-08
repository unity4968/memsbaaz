var multer = require("multer");

var path = require("path");

const fileStorageEngine = multer.diskStorage({
    
    destination: (req, file, cb) => {
        // cb(null, "./public");
        cb(null, path.join(__dirname, '../../public'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.originalname + '--' + Date.now());
        cb(null,uniqueSuffix);
    }
})

const upload = multer({ storage: fileStorageEngine });

module.exports = { upload };