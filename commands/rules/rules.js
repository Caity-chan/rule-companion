const Discord = require('discord.js');
const db = require("quick.db")
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
module.exports = {
    name: "post",
    usage: '`rcc.post`',
    description: "post server rules!",
    executableBy: "MANAGE_MESSAGES",
    execute(message, args, client) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
            const sr = new db.table('serverrules');
            div = sr.get(message.guild.id + "--divider");
            rules = sr.get(message.guild.id + "--rules");
            const Rules = new Discord.MessageEmbed()
                .setColor('Put Hex Code here')
                .setTitle('Server Rules').addFields(
                    {
                        name: "This is the server's rules!"
                        , value: "Please follow and respect the following rules:"
                    }
                );
            rules.forEach(rule => {
                Rules.addFields(
                    {
                        name: div,
                        value: rule
                    }
                )
            })
            message.channel.send(Rules);
        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `MANAGE_MESSAGES`")
        }
    }
}