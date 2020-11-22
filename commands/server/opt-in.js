const fs = require('fs');
module.exports = {
	name: 'opt-in',
  usage: '`rcc.opt-in`',
	description: 'Adds the channel that you execute this command in to a list. The list basically says which people want to be notified in their servers about bot updates or giveaways that I plan to do in the future!',
  executableBy: "Administrator",
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

