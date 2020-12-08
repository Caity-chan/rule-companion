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
        message.author.send(Rules);
    }
}