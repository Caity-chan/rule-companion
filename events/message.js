const fs = require('fs');
const { mainprefix } = require(`${__dirname}/../misc/config.json`);
const { setCommands } = require(`${__dirname}/../utilities/commands.js`);
const logpath = `${__dirname}/../misc/logs.txt`;
const db = require('quick.db');
/*
function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    var last  = 0;
    while (index > -1) {
      var line = remaining.substring(last, index);
      last = index + 1;
      func(line);
      index = remaining.indexOf('\n', last);
    }

    remaining = remaining.substring(last);
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}
let blacklistedMembers = [''];
function checkMem(data) {
    let blacklistMem = blacklistedMembers.push(data);
    
}
let blacklistedGuilds = [''];
function func(data) {
    let newblacklistGuild = blacklistedGuilds.push(data);
}
*/
module.exports = {
	name: 'message',
	description: 'commands!',
  eventexec(client, message) {
    //console.log("test")
    const commandlist = setCommands(client);
    user = message.author.id
    const prefixes = new db.table('prefixes');
    const userprefix = prefixes.get(`user.${user}`);
    
    //console.log("test " + userprefix)
    if (message.author.bot) return;
    if (userprefix === undefined) {
      if (!message.content.toLowerCase().startsWith(mainprefix)) {
        return;
      } else {
        prefixes.set(`usercurrent.${user}`, mainprefix);
      }
    } else {
      if (!message.content.startsWith(userprefix)) {
          if(message.content.toLowerCase().startsWith(mainprefix)) {
            prefixes.set(`usercurrent.${user}`, mainprefix);
          } else {
            return;
          }
      } else {
        prefixes.set(`usercurrent.${user}`, userprefix)
      }
    }
    //console.log(userprefix);
  
  prefixa = prefixes.get(`usercurrent.${user}`);
  const prefix = prefixa.toLowerCase();
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
  //console.log("args > " + args)
  //console.log("command > " + command)
  patha = `${__dirname}/../misc/blacklist/blacklistedMembers.txt`;
  pathb = `${__dirname}/../misc/blacklist/blacklistedGuilds.txt`;
  //readLines(meminput, checkMem);
  const bm = fs.readFileSync(patha, 'utf-8');
    const bmembers = bm.split("\n");
    if(bmembers.includes(message.author.id)) return;
    const bg = fs.readFileSync(pathb, 'utf-8');
    const bguilds = bg.split("\n");
    if(bguilds.includes(message.guild.id)) return;
    //bmembers.forEach(member=>{
    //  console.log(member)
    //  console.log(message.author.id)
    //  if(member === message.author.id) {
    //    
    //  }
    //})
  //input = fs.createReadStream('./misc/blacklist/blacklistedGuilds.txt');
  //readLines(input, func);
  //console.log(message.guild)
  if (message.guild === null) {
    guild = "@me"
  } else {
    if(bguilds.includes(message.guild.id)) return;
    guild = message.guild.id
  }
  

  //if(blacklistedMembers.includes(message.author.id) == true) return;

  for (index = 0; index < commandlist.length; index++) {
    //switch (command) {
      if (commandlist[index] === command) {
        client.commands.get(commandlist[index]).execute(message, args, client);
      }
        
    //}
  }
  var targs = args.join(' ');
  fs.appendFile(logpath, `\n [Guild.${message.guild.id}.member.${message.author.id}] ${command} <${targs}>`, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  if (guild !== "@me") {
    message.delete();
  }
  
  
  
}
};