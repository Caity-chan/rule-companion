//const Discord = require('discord.js');
//const client = new Discord.Client();
const Datastore = require('nedb')
const warns = new Datastore('./misc/warns.db');

const fs = require('fs');
module.exports = {
	name: 'read-warns',
	description: "read someone's warns!",
	execute(message, args, client) {
    warns.loadDatabase()
    const useree = args[0]
    const user = useree.replace(/!/g, "");
    const warningsliced = message.content.split(' ').slice(2);
    const warnse = []
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      var ees = message.guild.id;
      var warning = warningsliced.join(' ');
      let warnings = ''
	  	warns.find({ name: user, guild: message.guild.id }, function (err, docs) { 
        //warnings = warnings + ", " + doc.warning
        message.channel.send(docs.warning);
        docs.forEach(function(d) {
          //warnings = warnings + `\n${d}`
          var myJSON = JSON.stringify(d.warning);
          console.log(user)
          const users = user;
          console.log(users)
          const usera = users.toString();
          console.log(usera)
          var userId = usera.match(/\d{16,23}/g)[0]
          console.log(userId)
          client.users.fetch(userId).then((user) => {
            console.log(user.username)
            message.channel.send('**' + user.tag + '**' + ' has a warn for ' + '`' + myJSON + '`' + `!` + ` Warn ID: **${d._id}**`);
          });

        })
      });

    } else {
      return message.channel.send(`${message.author}` + " You do not have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

//client.login('NzY2MDEzNzM0Mjc4NzkxMjAw.X4dL4g.bqHsWbBJ7oPDMGq3ue4Y6C-tgYc');
