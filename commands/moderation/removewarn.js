

//const Discord = require('discord.js');
//const client = new Discord.Client();
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
      let warnings = ''
        //warnings = warnings + ", " + doc.warning
          //warnings = warnings + `\n${d}`
          //var myJSON = JSON.stringify(d.warning);
          console.log(user)
          const users = user;
          console.log(users)
          const usera = users.toString();
          console.log(usera)
          //var userId = usera.match(/\d{16,23}/g)[0]
          //console.log(userId)
          //username = "<@" + user + ">";
          //warns.remove({ name: userId, guild: message.guild.id, warning: warninge }, {}, //function (err, numRemoved) {
            //message.channel.send("Warn successfully removed!");
          //});
          warns.remove({ name: user, guild: message.guild.id, _id: warninge }, {}, function (err, numRemoved) {
            message.channel.send("Warn successfully removed!");
          });
          //client.users.fetch(userId).then((user) => {
          //  console.log(user.username)
          //  message.channel.send('**' + user.tag + '**' + ' has a warn for ' + '`' + myJSON + '`' + `!`);
          //});

        
      

    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

//client.login('NzY2MDEzNzM0Mjc4NzkxMjAw.X4dL4g.bqHsWbBJ7oPDMGq3ue4Y6C-tgYc');
