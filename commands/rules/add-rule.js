const fs = require('fs');
const db = require('quick.db');

module.exports = {
	name: 'add-rule',
  usage: '`add-rule <new rule>`',
  category: 'rules',
	description: 'add rules!',
  executableBy: "Administrator",
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      const div = new db.table('dividers');
      channel = message.channel;
      var ees = message.guild.id;
      
      var rule = args.join(' ');
      
      //divider = div.get(`${message.guild.id}`);
      //if(divider === null) {
      //  divider = "";
      //}
	  	fs.appendFile(`${__dirname}/../../serverrules/${ees}.txt`, `\n${rule}`, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

