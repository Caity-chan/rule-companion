//const { setCommands } = require(`${__dirname}/../../utilities/commands.js`);

const fs = require('fs');
module.exports = {
	name: 'rl-commands',
	description: 'reload commands!',
	execute(message, args, client) {
    const commandlist = setCommands(client);
    message.channel.send("Successfully reloaded commands!");
	},
};
