module.exports = {
	name: 'announce',
	description: 'announce!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
	  	message.channel.send(args.join(' '));
      //message.channel.send("test")
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

