const Datastore = require('nedb')
const warns = new Datastore('./misc/warns.db');

const fs = require('fs');
module.exports = {
	name: 'remove-warn',
  usage: '`rcc.remove-warn <@User or UserID> <WarnID>`',
	description: "remove someone's warn!",
  executableBy: "Administrator",
	execute(message, args, client) {
    warns.loadDatabase()
    const useree = args[0];
    var user = useree.match(/\d{16,23}/g)[0]
    const warningsliced = message.content.split(' ').slice(2);
    const warnse = []
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      var ees = message.guild.id;
      var warninge = warningsliced.join(' ');
      let warnings = '';
      console.log(user)
      const users = user;
      console.log(users)
      const usera = users.toString();
      console.log(usera)
      warns.remove({ name: user, guild: message.guild.id, _id: warninge }, {}, function (err, numRemoved) {
        message.channel.send("Warn successfully removed!");
      });
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

