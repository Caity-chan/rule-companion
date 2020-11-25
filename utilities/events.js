const fs = require('fs');
module.exports = {
  setEvents(client) {
    const eventFiles = fs.readdirSync(`${__dirname}/../events`).filter(file => file.endsWith('.js'));
    //console.log("step 1");
    let eventlist = ['']
    for (const file of eventFiles) {
    	const eventer = require(`${__dirname}/../events/${file}`);
    	client.events.set(eventer.name, eventer);
      eventlist.push(eventer.name);
      co/nsole.log("step 2");
    }
    
    client.events.forEach(function(index) {
      client.on(index.name, (event) => {
        if (index.name != "message") console.log(index.name, event);
        client.events.get(index.name).eventexec(client, event);
    });
      console.log("step 3");
    })
    return eventlist;
  }
}