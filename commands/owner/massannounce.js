const fs = require('fs');
module.exports = {
	name: 'mass-announce',
	description: 'mass-announce!',
	execute(message, args, client) {
      let size = client.guilds.cache.size;
      let arr = client.guilds.cache;
      users = '';
        arr.forEach(element => { 
            console.log(element)
            client.uers.cache.get(element.ownerID).send("This is a test announcement, please contact Caitlin-chan#4670");
        });
        message.channel.send(users)
	},
};

//PLEASE PLEASE PLEASE contact Caitlin-chan#4670 or join the support server with `rcc.support` because I made a lot of changes to the bot and I need to tell you about them. Thank you for your time and have a great day!