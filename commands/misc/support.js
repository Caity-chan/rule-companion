

module.exports = {
	name: 'support',
  usage: '`rcc.support`',
	description: 'an invite to the support server!',
	execute(message, args, client) {
    message.channel.send('https://discord.gg/SzxychV');
	},
};