
const db = require('quick.db');

module.exports = {
	name: 'guildMemberAdd',
	description: 'member joined server!',
  eventexec(client, member) {
    console.log("left");
    const wc = new db.table('welcomeleavechannels');
    const welc = wc.get(`welc.${member.guild.id}`);
    if (welc === undefined) return;
    client.channels.cache.get(welc).send(`${member} joined!`);
  }
};