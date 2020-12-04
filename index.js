const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
const server = require('./server.js');
const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token, logpath } = require('./misc/config.json');
const { MessageEmbed } = require('discord.js');


const client = new Discord.Client();

const companion = require('little-api-companion');
client.commandlist = companion.cmdInit(client, "commands");
companion.evInit(client, "events");
console.log(client.commandlist);



client.login(token);


server.keepAlive(client); 
server.serverInit(client);

