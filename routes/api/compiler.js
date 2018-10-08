const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post("/run", (req, res)=> {
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.headers.common['Authorization'] = 'Token 676c92e9-8fce-47a7-b492-54b8eabf807c';
  let data = {
    "files": [
      {
        "name": "main.py",
        "content": req.body.content,
      }
    ]
  }
  axios.post("https://run.glot.io/languages/"+req.body.mode+"/latest", data).then(result=> {
    res.send(result.data);
  }).catch(error=> {
    res.send(error.response);
  })
});

module.exports = router;
