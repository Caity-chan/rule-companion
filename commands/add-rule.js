const fs = require('fs');
module.exports = {
	name: 'add-rule',
	description: 'add rules!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      var ees = message.guild.id;
      var rule = args.join(' ');
	  	fs.appendFile(`./serverrules/${ees}.txt`, `\n${rule}`, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    } else {
      return message.channel.send(`${message.author}` + " You do not have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

