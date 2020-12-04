const fs = require('fs');

module.exports = {
  name: 'ready',
  description: 'bot online!',
  eventexec(client, placeholder) {
    console.log('Ready!');
    client.user.setActivity('rcc.help');
    client.channels.cache.get("772624622657994792").send(`Bot is now online!`);
    client.servers = {};
    client.servers.amount = client.guilds.cache.size;
    let arr = client.guilds.cache;
    client.servers.list = '';

    arr.forEach(element => {
        client.servers.list = `${client.servers.list} \n${element}`;
    });
    fs.appendFile('./misc/logs.txt', "\n [Bot] Ready!", function (err) {
      if (err) throw err;
      console.log('Updated!');
    })
  }
};