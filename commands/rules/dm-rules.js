const fs = require('fs');
module.exports = {
  name: "dm-rules",
  usage: '`rcc.dm-rules`',
  description: "DMs you the server's rules!",
  executableBy: "Administrator",
  execute(message, args, client) {
    const path = `${__dirname}/../../serverrules/${message.guild.id}.txt`;
    const content = fs.readFileSync(path, 'utf-8');
    message.author.send(content);
  }
}