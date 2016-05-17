'use strict';

var dotenv = require("dotenv"),
    multer = require("multer"),
    serverHndl = require("../controllers/server.index.js");


// var storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, "/upload");
//     },
//     filename: function(req, file, cb){
//         cb(null, file.filename + Date.now());
//     }
// });

// var upload = multer({storage : storage}).single("userfile");

//var upload = multer({dest : "upload/"}).single("userfile");

module.exports = function(app){
    var hndl = new serverHndl(app);
    
    app.get("/", function(req, res, next){
        return res.sendfile(process.cwd() + "/public/index.html");
    });
    
    app.post("/upload", hndl.uploadFile);
}