
const fs = require('fs');
const express = require('express');
const app = express();
var router = express.Router()
    //const servers = fs.readdirSync(`./serverrules`);
    /*
    let commandlist = ['']
    //for (const server of servers) {
      const serversa = fs.readdirSync(`./serverrules`).filter(file => file.endsWith('.txt'));
      

        */
        
        
        
        //console.log(rules)
        router.get('/rules/:server', (req, res)=>{
          console.log(req.params.server)
          const path = `./serverrules/${req.params.server}.txt`;
          const content = fs.readFileSync(path, 'utf-8');
          res.send(content);
        });
      
    //}


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