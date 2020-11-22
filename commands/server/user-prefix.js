const db = require('quick.db');


module.exports = {
  name: "user-prefix",
  usage: '`rcc.credits`',
  description: "set prefix for user!",
  execute(message, args, client) {
    user = message.author.id
    const prefixes = new db.table('prefixes');
    prefixes.set(`user.${user}`, args.join(' '))
    message.channel.send("Successfully set user prefix!");
  }
}