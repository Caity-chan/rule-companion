const Discord = require('discord.js');
const db = require("quick.db")
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
module.exports = {
  name: "dm-rules",
  usage: '`rcc.dm-rules`',
  description: "DMs you the server's rules!",
  executableBy: "Members",
  execute(message, args, client) {
    const path = `${__dirname}/../../serverrules/${message.guild.id}.txt`;
    const div = new db.table('dividers');
    divider = div.get(`${message.guild.id}`);
    const Rules = new Discord.MessageEmbed()
        .setColor('Put Hex Code here')
        .setTitle('Server Rules').addFields(
          { name: "This is the server's rules!"
          , value: "Please follow and respect the following rules:" }
        );
    const content = fs.readFileSync(path, 'utf-8');
    const rules = content.split("\n");
    rules.forEach(rule=>{
      Rules.addFields(
          {
            name: divider,
            value: rule
          }
        )
    })
    message.author.send(Rules);
  }
}