const db = require('quick.db');



module.exports = {
	name: 'support',
  usage: '`rcc.credits`',
	description: 'support!',
	execute(message, args, client) {
    const div = new db.table('dividers');
    if (message.member.hasPermission(`ADMINISTRATOR`)) {
      div.set(`${message.guild.id}`, `${args.join(" ")}`);
    }
	},
};

    