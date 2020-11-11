const fs = require('fs');

module.exports = {
	name: 'guildCreate',
	description: 'join server!',
  eventexec(client, guild) {
    console.log("Joined a new guild: " + guild.name);
    var ees = guild.id;
    var writeStream = fs.createWriteStream(`./serverrules/${ees}.txt`);
    writeStream.end;
    fs.appendFile('./misc/logs.txt', "\n [Bot] Joined a new guild: " + guild.name, function (err) {
      if (err) throw err;
      console.log('Updated!');
    })
  }
};