

const fs = require('fs');
module.exports = {
	name: 'permtest',
	description: 'perm-test!',
	execute(message, args, client) {
    guild = message.guild;
    if (!guild.members.cache.get(client.user.id).hasPermission("ADMINISTRATOR")) return message.reply("I need Administrator permissions!");
    else return message.reply("I have Administrator permissions!")
	},
};