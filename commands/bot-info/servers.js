const fs = require('fs');
module.exports = {
	name: 'servers',
  usage: '`rcc.servers`',
	description: 'The servers that the bot is in + how much servers!',
  executableBy: "Members",
	execute(message, args, client) {
      message.channel.send(client.servers.list);
			message.channel.send(`the bot is in ${client.servers.amount} servers!`);
	},
};


///client.users.cache.get('563980783828860944').send(invite.url)

