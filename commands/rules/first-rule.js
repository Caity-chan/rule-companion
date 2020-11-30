const fs = require('fs');
const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
	name: 'first-rule',
  usage: '`rcc.first-rule`',
	description: "Set the server's first rule!",
  executableBy: "Administrator",
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      var ees = message.guild.id;
      const div = new db.table('dividers');
      divider = div.get(`${message.guild.id}`)
      const Rules = new Discord.MessageEmbed()
        .setColor('Put Hex Code here')
        .setTitle('Server Rules').addFields(
          { name: "This is the server's rules!"
          , value: "Please follow and respect the following rules:" }

          ,

          { name: divider,
          value: args.join(' ') }
        );
      message.channel.send(Rules);
	  	fs.appendFile(`${__dirname}/../../serverrules/${ees}.txt`, args.join(' '), function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

