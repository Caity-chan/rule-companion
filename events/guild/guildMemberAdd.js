
const db = require('quick.db');

module.exports = {
	name: 'guildMemberAdd',
	description: 'member joined server!',
  eventexec(client, member) {
    console.log("left");
    const wc = new db.table('welcomeleavechannels');
    const welc = wc.get(`welc.${member.guild.id}`);
    if (welc === undefined) return;
    var membera = String(member);
    var memberr = membera.match(/\d{16,23}/g)[0]
    client.users.fetch(`${memberr}`).then(user=>client.channels.cache.get(welc).send("`" + user.tag + "`" + " has joined!"));
  }
};