'use strict';

var dotenv = require("dotenv"),
    multer = require("multer"),
    serverHndl = require("../controllers/server.index.js"),
    users = require("../models/users.js");

dotenv.load();

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "upload/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + new Date().getTime());
    }
});

var upload = multer({storage : storage}).single("userfile");

module.exports = function(app){
  this.uploadFile = function(req, res ,next){
      upload(req, res, function(err){
          if(err){
              throw err;
          }
          var newuser = new users();
         // console.log(req.file);
          newuser.originalName = req.file.fieldName;
          newuser.newName = req.file.filename;
          newuser.size = req.file.size;
          newuser.when = Date.now();
          
          newuser.save(function(err, file){
              if(err) {
                  throw err;
              }
            //  console.log(file.newName + " is saved in upload dir");
              return res.send("FILE SIZE : " + file.size);
          });
      });
  };  
};