const fs = require('fs');
module.exports = {
	name: 'add-rule-by-id',
  usage: 'add-rule-by-id <channel-id> <new rule>',
  category: 'rules',
	description: 'add rules!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      channel = message.channel;
      var ees = message.guild.id;
      //var rules = args.slice(1);
      var rule = args.slice(1).join(' ');
      channel.messages.fetch(args[0]).then(message => message.edit(message.content + `\n${rule}`)).catch(console.error);
	  	fs.appendFile(`./serverrules/${ees}.txt`, `\n${rule}`, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

