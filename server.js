
const fs = require('fs');
const express = require('express');
const app = express();
var router = express.Router()
app.get('/rules/:server', (req, res)=>{
  console.log(req.params.server)
  const path = `./serverrules/${req.params.server}.txt`;
  const content = fs.readFileSync(path, 'utf-8');
  newcont = content.split("\n");
  newnewcont = newcont.join("<br>");
  res.send(newnewcont);
});
      
    //}
app.post('/messages', (req, res)=>{
  fs.appendFile('./misc/messages.txt', `\n${req.params.message}`, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  res.send(req.message);
});
app.get('/messages', (req, res)=>{
  const content = fs.readFileSync('./misc/messages.txt', 'utf-8');
  newcont = content.split("\n");
  newnewcont = newcont.join("<br>");
  res.send(content);
});
app.get('/br', (req,res)=>{
  res.send("test<br>test")
})
app.get('/site', (req,res)=>{
  const path = `./site/site.html`;
  const content = fs.readFileSync(path, 'utf-8');
  res.send(content);

})
app.get('/site/:page', (req,res)=>{
  const path = `./site/${req.params.page}.html`;
  const content = fs.readFileSync(path, 'utf-8');
  res.send(content);

})
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