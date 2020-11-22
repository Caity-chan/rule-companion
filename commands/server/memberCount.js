module.exports = {
	name: 'member-count',
  usage: '`rcc.credits`',
	description: 'amount of members in the server!',
	execute(message, args, client) {
    message.channel.send("There are **" + message.guild.memberCount + "** members in this server!"
			);
	},
};