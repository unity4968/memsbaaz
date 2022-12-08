var express = require("express");
const router = express.Router();

var {class1} = require('../controller/controller');
var {upload} = require('../middleware/middleware');

var path = require("path");

var Todo = require("../models/schema")

router.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname, "../index.html"));
    
})

router.post("/signup",class1.a);
router.post("/login",class1.login);
router.post("/users",class1.user);
router.post("/upload/:id",upload.array('add', 100 ),class1.upload);

router.post("/delete",class1.delete);

module.exports = router;