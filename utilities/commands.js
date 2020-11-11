const fs = require('fs');

module.exports = {
  setCommands(client) {

    const commandFiles = fs.readdirSync(`${__dirname}/../commands`).filter(file => file.endsWith('.js'));
    
    let commandlist = ['']

    for (const file of commandFiles) {
	    const commander = require(`${__dirname}/../commands/${file}`);
	    client.commands.set(commander.name, commander);
      commandlist.push(commander.name);
    }
    return commandlist;
  }
}