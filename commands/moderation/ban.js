
module.exports = {
	name: 'ban',
	usage: '`rcc.ban <@User or UserID>`',
	description: 'ban someone!',
	executableBy: "Administrator",
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
			guild = message.guild;
			guild.members.ban(message.mentions.users.first().id || message.guild.members.fetch(args[0]))
				.then(user => message.channel.send(`Banned ${user.username || user.id || user} from ${guild.name}`))
				.catch(console.error);
		} else {
			return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
		}
	},
};

