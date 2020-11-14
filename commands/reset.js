const fs = require('fs');
module.exports = {
	name: 'reset',
	description: 'announce!',
	execute(message, args, client) {
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
	  	var ees = message.guild.id;
      const path = `./serverrules/${ees}.txt`
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

