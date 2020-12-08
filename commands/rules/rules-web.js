module.exports = {
  name: "rules-web",
  usage: '`rcc.rules-web`',
  description: "post URL to server's rules!",
  executableBy: "Member",
  execute(message, args, client) {
    message.channel.send(`Server rules!: \n https://little.companion.repl.co/rules/${message.guild.id}`);
  }
}