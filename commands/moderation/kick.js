
module.exports = {
	name: 'kick',
  usage: '`rcc.kick <@User or UserID>`',
	description: 'kick someone!',
  executableBy: "Administrator",
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      guild = message.guild;
      let member = message.mentions.users.first() || client.users.cache.get(args[0]);
      reason = args.splice(1).join(' ')
      if (member) {
        // this gets the member from the user
        const user = message.guild.member(member);
        if (user) {
          user.kick(reason)
            .then(() => { message.channel.send(`Kicked ${user.username || user.id || user} from ${guild.name} for ` + "`" + reason + "`") })
            .catch(err => { });
        }
      }
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

