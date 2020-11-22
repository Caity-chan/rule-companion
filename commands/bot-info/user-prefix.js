const db = require('quick.db');


module.exports = {
  name: "user-prefix",
  usage: '`rcc.user-prefix <prefix>`',
  description: "set your own personally preferred prefix for the bot!",
  executableBy: "Members",
  execute(message, args, client) {
    user = message.author.id
    const prefixes = new db.table('prefixes');
    prefixes.set(`user.${user}`, args.join(' '))
    message.channel.send("Successfully set user prefix!");
  }
}