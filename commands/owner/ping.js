module.exports = {
	name: 'ping',
  usage: '`rcc.credits`',
	description: 'Ping!',
	execute(message, args, client) {
		message.channel.send('Pong Pong.');
	},
};

