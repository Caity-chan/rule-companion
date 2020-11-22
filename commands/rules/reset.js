const fs = require('fs');
module.exports = {
	name: 'reset',
  usage: '`rcc.credits`',
	description: 'announce!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
	  	var ees = message.guild.id;
      const path = `${__dirname}/../../serverrules/${ees}.txt`
      try {
        fs.unlinkSync(path)
        var writeStream = fs.createWriteStream(path);
        writeStream.end;
      } catch(err) {
        console.error(err)
      }
      
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

