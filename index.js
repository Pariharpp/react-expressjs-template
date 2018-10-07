require('dotenv').config()
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,"public")));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(process.env.SERVER_PORT, ()=> {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
