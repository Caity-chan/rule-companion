const db = require('quick.db');



module.exports = {
	name: 'divider-style',
  usage: '`rcc.divider-style <divider>`',
	description: 'Make your own divider to separate your server rules!',
  executableBy: "Administrator",
	execute(message, args, client) {
    const div = new db.table('dividers');
    if (message.member.hasPermission(`ADMINISTRATOR`)) {
      div.set(`${message.guild.id}`, `${args.join(" ")}`);
    }
	},
};

    