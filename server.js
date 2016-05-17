var express = require("express"),
    path = require("path"),
    dotenv = require("dotenv"),
    mongoose = require("mongoose"),
    routes = require(process.cwd() + "/app/routes");
  
var app = express();

dotenv.load();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/files");

//middle wares

app.use("/public", express.static(path.join(process.cwd(), "public")));
app.use("/controllers", express.static(path.join(process.cwd(), "app", "controllers")));

//route

routes(app);

//listen
app.listen(process.env.PORT || 8080, function(){
  console.log("express server is listening on port " + process.env.PORT || 8080);
});



