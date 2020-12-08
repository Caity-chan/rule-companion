const command = require(`${__dirname}/../../server.js`)
const fs = require('fs');
module.exports = {
	name: 'rl',
	description: 'reload commands and events!',
	execute(message, args, client) {
        if (message.author.id === "563980783828860944") {
            if (args[0] === "commands") {
                command.reloadCmd(client, message);
                message.channel.send("Successfully reloaded commands!");
            } else if (args[0] === "events") {
                command.reloadEv(client);
                message.channel.send("Successfully reloaded events!");
            }
                
        } else message.channel.send("You are not the owner of this bot!");
	},
};
