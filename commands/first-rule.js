const fs = require('fs');
module.exports = {
	name: 'first-rule',
	description: 'first rule!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      var ees = message.guild.id;
      message.channel.send(args.join(' '));
	  	fs.appendFile(`./serverrules/${ees}.txt`, args.join(' '), function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

