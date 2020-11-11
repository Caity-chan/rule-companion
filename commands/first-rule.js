const fs = require('fs');
module.exports = {
	name: 'first-rule',
	description: 'first rule!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      var ees = message.guild.id;
	  	fs.appendFile(`./serverrules/${ees}.txt`, args.join(' '), function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    } else {
      return message.channel.send(`${message.author}` + " You do not have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

