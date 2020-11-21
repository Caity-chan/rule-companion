module.exports = {
  name: "rules-web",
  description: "post server rules URL!",
  execute(message, args, client) {
    message.channel.send(`Server rules!: \n https://little.companion.repl.co/rules/${message.guild.id}`);
  }
}