const fs = require('fs');

module.exports = {
	name: 'guildDelete',
	description: 'leave server!',
  eventexec(client, guild) {
    console.log("Left a guild: " + guild.name);
    var ees = guild.id;
    fs.unlinkSync(`./serverrules/${ees}.txt`);
  }
};