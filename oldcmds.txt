const fs = require('fs');

module.exports = {
  setCommands(client) {
    
    const commandFolders = fs.readdirSync(`${__dirname}/../commands`);
    
    let commandlist = ['']
    for (const folder of commandFolders) {
      const commandFiles = fs.readdirSync(`${__dirname}/../commands/${folder}`).filter(file => file.endsWith('.js'));
      

      for (const file of commandFiles) {
        const commander = require(`${__dirname}/../commands/${folder}/${file}`);
        client.commands.set(commander.name, commander);
        commandlist.push(commander.name);
      }
    }
      
      return commandlist;
  }
}