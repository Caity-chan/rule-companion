const fs = require('fs');
module.exports = {
	name: 'servers',
  usage: '`rcc.servers`',
	description: 'The servers that the bot is in + how much servers!',
  executableBy: "Members",
	execute(message, args, client) {
      let size = client.guilds.cache.size;
      let arr = client.guilds.cache;
      servers = '';
      
        arr.forEach(element => {
          if (args[0]) {
            if(args[0].toLowerCase() === "id") {
              servers = `${servers} \n**${element}** :\n` + "`" + element.id + "`";
            } else {
              servers = `${servers} \n${element}`;
            }
          } else {
            servers = `${servers} \n${element}`;
          }
          
          
        });
      
      message.channel.send(servers);
			message.channel.send(`the bot is in ${size} servers!`);
	},
};


///client.users.cache.get('563980783828860944').send(invite.url)

