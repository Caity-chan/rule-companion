

const db = require('quick.db');
module.exports = {
	name: 'welcome-channel',
  usage: '`rcc.welcome-channel`',
	description: 'set welcome message channel!',
  executableBy: "Administrator",
	execute(message, args, client) {
    const wc = new db.table('welcomeleavechannels');
    if (args[0] === undefined) {
      const channel = message.channel.id.replace(/!/g, /</g, />/g, /#/, "");
      console.log(channel);
      wc.set(`welc.${message.guild.id}`, `${channel}`);
      message.channel.send("Successfully set leave message channel to " + message.channel.id + "!")
    } else {
      const channel = message.mentions.channels.first().id;
      wc.set(`welc.${message.guild.id}`, `${channel}`);
      message.channel.send("Successfully set welcome message channel to " + channel + "!")
    }
    
	},
};