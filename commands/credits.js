

module.exports = {
	name: 'credits',
	description: 'credits!',
	execute(message, args, client) {
    message.channel.send(
				`Developed by Caitlin-chan#4670. Special thanks to Kae#0004 for troubleshooting and helping at the early stages of the bot! \n \nTested and developed in the Hunter Tower(invite to server is in support server if you wanna join it) \n \nSpecial thanks to the Super Gamers server for helping beta test the bot!(Invite for that server is in support server as well)`
			);
	},
};