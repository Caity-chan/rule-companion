const fs = require('fs');
module.exports = {
	name: 'opt-in',
	description: 'opt in to announcements!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      var ees = message.channel.id;
      var rule = args.join(' ');
	  	fs.appendFile(`./misc/optedIn.txt`, `\n${ees}`, function (err) {
        if (err) throw err;
        console.log('Updated!');
        message.channel.send('Successfully opted in!');
      });
      
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

