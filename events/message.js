const fs = require('fs');
const { prefix } = require(`${__dirname}/../misc/config.json`);
const { setCommands } = require(`${__dirname}/../utilities/commands.js`);
const logpath = `${__dirname}/../misc/logs.txt`;

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

module.exports = {
	name: 'message',
	description: 'commands!',
  eventexec(client, message) {
    const commandlist = setCommands(client);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  meminput = fs.createReadStream('./misc/blacklist/blacklistedMembers.txt');
  readLines(meminput, checkMem);

  input = fs.createReadStream('./misc/blacklist/blacklistedGuilds.txt');
  readLines(input, func);

  if(blacklistedGuilds.includes(message.guild.id) == true) return;

  if(blacklistedMembers.includes(message.author.id) == true) return;

  for (index = 0; index < commandlist.length; index++) {
    switch (command) {
      case commandlist[index]:
        client.commands.get(commandlist[index]).execute(message, args, client);
    }
  }
  var targs = args.join(' ');
  fs.appendFile(logpath, `\n [Guild.${message.guild.id}.member.${message.author.id}] ${command} <${targs}>`, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  message.delete();
  }
};