const keepAlive = require('./server.js');
const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token, logpath } = require('./misc/config.json');
const { MessageEmbed } = require('discord.js');


const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const { setCommands } = require(`./utilities/commands.js`);
const commandlist = setCommands(client);
//console.log(commandlist);

const { setEvents } = require('./utilities/events.js');
const eventlist = setEvents(client);
//console.log(eventlist);
client.login(token);
keepAlive();
