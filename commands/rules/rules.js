const fs = require('fs');
module.exports = {
  name: "post",
  usage: '`rcc.post`',
  description: "post server rules!",
  executableBy: "Administrator",
  execute(message, args, client) {
    const path = `${__dirname}/../../serverrules/${message.guild.id}.txt`;
    const content = fs.readFileSync(path, 'utf-8');
    message.channel.send(content);
  }
}