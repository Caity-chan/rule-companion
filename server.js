const express = require('express');
const app = express();


function keepAlive(){
    console.log('pog')
    app.get('/', (req, res)=>{
      res.send('Your bot is alive!')
    });
    app.get(`/guilds`, function (req, res) {
      res.send("10");
    })
    app.listen(3000)
}
module.exports = keepAlive;