const keepAlive = require('./server');
const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token, logpath } = require('./misc/config.json');
//var db = require('quick.db');
const { MessageEmbed } = require('discord.js');


const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
//client.events = new Discord.Collection();
/*
client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity('rcc.help');
  client.channels.cache.get("772624622657994792").send(`Bot is now online!`);
  fs.appendFile(logpath, "\n [Bot] Ready!", function (err) {
        if (err) throw err;
        console.log('Updated!');
  })
});
*/

const { setCommands } = require(`./utilities/commands.js`);
const commandlist = setCommands(client);
console.log(commandlist);

//const estaewfawefawe = setEvents();
const { setEvents } = require('./utilities/events.js');
const eventlist = setEvents(client);
console.log(eventlist);

//require('./utilities/events.js');
/*
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let commandlist = ['']

for (const file of commandFiles) {
	const commander = require(`./commands/${file}`);
	client.commands.set(commander.name, commander);
  let newcommandlist = commandlist.push(commander.name);
}
*/

//const teste = require('./events/ready.js');



/*
for (index = 0; index < eventlist.length; index++) {
  switch (eventlist) {
    case eventlist[index]:
      client.on(index, (event) => {
        client.events.get(eventlist[index]).execute();
      });
  }
}
*/

/*
client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    var ees = guild.id;
    var writeStream = fs.createWriteStream(`./serverrules/${ees}.txt`);
    writeStream.end;
    fs.appendFile(logpath, "\n [Bot] Joined a new guild: " + guild.name, function (err) {
        if (err) throw err;
        console.log('Updated!');
    })
    
})
*/
/*
	client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    var ees = guild.id;
    var writeStream = fs.createWriteStream(`./serverrules/${ees}.txt`);
    writeStream.end;
    fs.appendFile(logpath, "\n [Bot] Joined a new guild: " + guild.name, function (err) {
      if (err) throw err;
      console.log('Updated!');
    })
    
  })
*/
//const fs = require('fs'); // fs is the package we need to read all files which are in folders


//mongo "mongodb+srv://littlecompanion.3oz3f.mongodb.net/roleacquisitioncompanion" --username Caitlin-chan
/*
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  //blacklistedMembers = [''];
  meminput = fs.createReadStream('./misc/blacklist/blacklistedMembers.txt');
  readLines(meminput, checkMem);

  //blacklistedGuilds = [''];
  input = fs.createReadStream('./misc/blacklist/blacklistedGuilds.txt');
  readLines(input, func);

  if(blacklistedGuilds.includes(message.guild.id) == true) return;

  if(blacklistedMembers.includes(message.author.id) == true) return;

  for (index = 0; index < commandlist.length; index++) {
    switch (command) {
      case commandlist[index]:
        client.commands.get(commandlist[index]).execute(message, args);
    }
  }
  var targs = args.join(' ');
  fs.appendFile(logpath, `\n [Guild.${message.guild.id}.member.${message.author.id}] ${command} <${targs}>`, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  message.delete();
  
});
*/
keepAlive();
client.login(token);