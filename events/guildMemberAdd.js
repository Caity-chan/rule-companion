module.exports = {
	name: 'guildMemberAdd',
	description: 'member joined server!',
  eventexec(client, member) {
    console.log("join");
    channele = member.guild.channels.cache;
    channele.forEach(function(channelee) {
      if(channelee.name === "welcome") {
        channelee.send("joined");
      } else if(channelee.name === "welcome-messages") {
        channelee.send("joined");
      }
    })
    console.log("join");
  }
};