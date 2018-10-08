require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use('/api/compiler', require('./routes/api/compiler'));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(process.env.SERVER_PORT, ()=> {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
