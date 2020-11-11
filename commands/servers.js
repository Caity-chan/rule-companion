const fs = require('fs');
module.exports = {
	name: 'servers',
	description: 'servers!',
	execute(message, args, client) {
      let size = client.guilds.cache.size;
      let arr = client.guilds.cache;
      arr.forEach(element => { 
        servers = `${servers} \n${element}`;
      });
      message.channel.send(servers);
			message.channel.send(`the bot is in ${size} servers!`);
      servers = '';
	},
};


