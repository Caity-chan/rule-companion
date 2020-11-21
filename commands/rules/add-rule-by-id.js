const fs = require('fs');
const db = require('quick.db')
module.exports = {
	name: 'add-rule-by-id',
  usage: 'add-rule-by-id <channel-id> <new rule>',
  category: 'rules',
	description: 'add rules!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      const div = new db.table('dividers');
      channel = message.channel;
      var ees = message.guild.id;
      //var rules = args.slice(1);
      var rule = args.slice(1).join(' ');
      divider = div.get(`${message.guild.id}`)
      console.log(divider);
      if(divider === null) {
        divider = "";
      }
      channel.messages.fetch(args[0]).then(message => message.edit(message.content + `\n{divider}\n${rule}`)).catch(console.error);
	  	fs.appendFile(`${__dirname}/../../serverrules/${ees}.txt`, `\n${divider} \n${rule}`, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

