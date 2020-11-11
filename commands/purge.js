module.exports = {
	name: 'purge',
	description: 'purge chat!',
	execute(message, args, client) {
    num = parseInt(args[0]);
    reason = args.slice(1).join(' ');
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      message.channel.bulkDelete(num+1);
      console.log(reason);
      if (reason === '') {
        message.channel.send('Purged **' + num + '** messages! `No reason given.`')
      } else {
        message.channel.send(`Purged **${num}** messages for \`${reason}\`.`)
      }
        
    } else {
      return message.channel.send(`${message.author}` + " You do not have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

