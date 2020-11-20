module.exports = {
	name: 'invite',
	description: 'invite!',
	execute(message, args, client) {
    message.channel.send(
				`https://discord.com/oauth2/authorize?client_id=766013734278791200&permissions=523329&scope=bot`
			);
	},
};
