const db = require('quick.db');
const traffic = new db.table('traffic');

const fs = require('fs');
const express = require('express');
const app = express();
var router = express.Router()
app.get('/rules/:server', (req, res) => {
    console.log(req.params.server)
    const path = `./serverrules/${req.params.server}.txt`;
    const content = fs.readFileSync(path).toString();
    newcont = content.split("\n");
    newnewcont = newcont.join("<br>");
    res.send(newnewcont);
});

//}
app.post('/messages', (req, res) => {
    fs.appendFile('./misc/messages.txt', `\n${req.params.message}`, function(err) {
        if (err) throw err;
        console.log('Updated!');
    });
    res.send(req.message);
});
app.get('/messages', (req, res) => {
    const content = fs.readFileSync('./misc/messages.txt').toString();
    newcont = content.split("\n");
    newnewcont = newcont.join("<br>");
    res.send(content);
});
app.get('/br', (req, res) => {
    res.send("test<br>test")
})
app.get('/site', (req, res) => {
    mpt = traffic.get('mptraffic');
    if (!mpt) {
        mpt = 0;
    }
    mpt = mpt + 1;
    const webvars = [
        {
            name: 'mptraffic',
            value: mpt
        }
    ]
    traffic.set('mptraffic', mpt);
    const path = `./site/site.html`;
    content = fs.readFileSync(path).toString();
    for (const variable of webvars) {
        patt = new RegExp("--" + variable.name, "g")
        content = content.replace(patt, variable.value);
    }
    res.send(content);

})
app.get('/site/:page', (req, res) => {
    const path = `./site/${req.params.page}.html`;
    const content = fs.readFileSync(path).toString();
    res.send(content);

})
function keepAlive() {
    console.log('pog')
    app.get('/', (req, res) => {
        res.send('Your bot is alive!')
    });
    app.get(`/guilds`, function(req, res) {
        res.send("10");
    })
    app.listen(3000)
}
module.exports = keepAlive;