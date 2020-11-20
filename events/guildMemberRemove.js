
const db = require('quick.db');

module.exports = {
	name: 'guildMemberRemove',
	description: 'member left server!',
  eventexec(client, member) {
    console.log("left");
    const wc = new db.table('welcomeleavechannels');
    const welc = wc.get(`leave.${member.guild.id}`);
    if (welc === undefined) return;
    client.channels.cache.get(welc).send(`${member} left!`);
  }
};

/*

    
*/

/*
    channele = member.guild.channels.cache;
    channele.forEach(function(channelee) {
      if(channelee.name === "welcome") {
        channelee.send("joined");
      } else if(channelee.name === "welcome-messages") {
        channelee.send("joined");
      }
    })
    console.log("join");
    */