const fs = require('fs');
module.exports = {
  setEvents(client) {
    const eventFolders = fs.readdirSync(`${__dirname}/../events`);
    for (const eventFolder of eventFolders) {
      const eventFiles = fs.readdirSync(`${__dirname}/../events/${eventFolder}/`).filter(file => file.endsWith('.js'));
      for (const file of eventFiles) {
        const eventer = require(`${__dirname}/../events/${eventFolder}/${file}`);
        client.events.set(eventer.name, eventer);
      }
      
      
    }
    client.events.forEach(function(index) {
        client.on(index.name, (event) => {
          if (index.name != "message") console.log(index.name, event);
          client.events.get(index.name).eventexec(client, event);
        });
      })
  }
}