

/*
const fs = require('fs');
const db = require('quick.db')
module.exports = {
	name: 'edit-rule-by-id',
  usage: '`add-rule-by-id <channel-id> <new rule>`',
  category: 'rules',
	description: 'add rules!',
  executableBy: "Administrator",
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      const div = new db.table('dividers');
      channel = message.channel;
      var ees = message.guild.id;
      //var rules = args.slice(1);
      var rule = args.slice(2).join(' ');
      divider = div.get(`${message.guild.id}`)
      console.log(divider);
      //if(divider === null) {
      //  divider = "";
      //}${rule}
      channel.messages.fetch(args[0]).then(message => console.log(message.embeds[0].fields)).catch(console.error);
      channel.messages.fetch(args[0]).then(message => message.edit(message.embeds[0].fields[args[2] - 1] =
          { name: divider
          , value: rule }
        )).catch(console.error);
      /*
      fs.readFile(`${__dirname}/../../serverrules/${ees}.txt`, 'utf8', function (err,data) {
        var formatted = data.replace(/${oldrule}/g, newrule);
        fs.writeFile(`${__dirname}/../../serverrules/${ees}.txt`, formatted, 'utf8', function (err) {
          if (err) return console.log(err);
        });
      });
      *//*
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

*/