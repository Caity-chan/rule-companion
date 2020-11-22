

module.exports = {
	name: 'support',
  usage: '`rcc.support`',
	description: 'an invite to the support server!',
  executableBy: "Members",
	execute(message, args, client) {
    message.channel.send('https://discord.gg/SzxychV');
	},
};