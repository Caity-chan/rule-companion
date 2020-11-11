//const Discord = require('discord.js');
//const client = new Discord.Client();
const fs = require('fs');
module.exports = {
	name: 'leave-server',
	description: 'leave server!',
	execute(message, args, client) {
		if(message.author.id =='563980783828860944') {
      message.channel.send("Successfully left the server!");
      message.guild.leave()
        .then(g => console.log(`Left the guild ${g}`))
         .catch(console.error);
    
    }
   
	},
};

