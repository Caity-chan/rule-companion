module.exports = {
	name: 'guildMemberAdd',
	description: 'member joined server!',
  eventexec(client, guild) {
    console.log("join");
    channele = guild.channels.cache;
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