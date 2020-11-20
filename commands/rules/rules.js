const fs = require('fs');
module.exports = {
  name: "post",
  description: "post server rules!",
  execute(message, args, client) {
    const path = `${__dirname}/../../serverrules/${message.guild.id}.txt`;
    const content = fs.readFileSync(path, 'utf-8');
    message.channel.send(content);
  }
}