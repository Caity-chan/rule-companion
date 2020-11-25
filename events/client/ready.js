const fs = require('fs');

module.exports = {
  name: 'ready',
  description: 'bot online!',
  eventexec(client, placeholder) {
    console.log('Ready!');
    client.user.setActivity('rcc.help');
    client.channels.cache.get("772624622657994792").send(`Bot is now online!`);
    fs.appendFile('./misc/logs.txt', "\n [Bot] Ready!", function (err) {
      if (err) throw err;
      console.log('Updated!');
    })
  }
};