require('dotenv').config()
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,"public")));

app.listen(process.env.SERVER_PORT, ()=> {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
