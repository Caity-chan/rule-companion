const db = require('quick.db');
const traffic = new db.table('traffic');
const companion = require('little-api-companion');
const fs = require('fs');
const express = require('express');
const app = express();
module.exports = {
    serverInit(client) {
        var router = express.Router();
        app.get('/rules/:server', (req, res) => {
            console.log(req.params.server)
            const sr = new db.table('serverrules');
            div = sr.get(req.params.server + "--divider");
            rules = sr.get(req.params.server + "--rules");
            rs = "This is the server's rules! <br> Please follow and respect the following rules: <br>" + div;
            for (const rule of rules) {
                rs = rs + "<br>" + rule + "<br>" + div;
            }
            res.send(rs);
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
    },
    keepAlive(client) {
        console.log('pog')
        app.get('/', (req, res) => {
            res.send('Your bot is alive!')
        });
        /*
        app.get(`/requests/:request`, function(req, res) {
            request = req.params.request;
            if (request.toString().toLowerCase().includes("token")) return res.send("illegal request");
            if (request.toString().toLowerCase().includes("t")) if (request.toString().toLowerCase().includes("o")) if (request.toString().toLowerCase().includes("k")) if (request.toString().toLowerCase().includes("e")) if (request.toString().toLowerCase().includes("n")) return res.send("illegal request");
            if (request.toString().toLowerCase().includes("%")) return res.send("illegal request");
            eval(`response = ${request}`);
            if (typeof response === 'string') if (response.includes("\n")) response = response.replace(/\n/g, "<br>");
            res.send(`${response}`);
        })
        */
        app.listen(3000)
    },
    reloadCmd(client, message) {
        try {
            companion.cmdInit(client, "commands");
        } catch (err) {
            return message.channel.send("```" + err + "```");
        }
        
    },
    reloadEv(client) {
        companion.evInit(client, "events");
    }
}

//odule.exports = reload;
    
//module.exports = keepAlive;