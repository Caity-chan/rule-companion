const fs = require('fs');
const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'first-rule',
    usage: '`rcc.first-rule`',
    description: "Set the server's first rule!",
    executableBy: "Administrator",
    async execute(message, args, client) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
            const sr = new db.table('serverrules');
            div = sr.get(message.guild.id + "--divider");
            rules = sr.get(message.guild.id + "--rules");
            if (rules) return message.channel.send("You have already set the first rule!");
            if (!div) return message.channel.send("You have not set a divider yet!");
            const Rules = new Discord.MessageEmbed()
                .setColor('Put Hex Code here')
                .setTitle('Server Rules').addFields(
                    {
                        name: "This is the server's rules!" 
                        , value: "Please follow and respect the following rules:"
                    }

                    ,

                    {
                        name: div,
                        value: args.join(' ')
                    }
                );
            msg = await message.channel.send(Rules);
            rules = sr.set(message.guild.id + "--ids", [ msg.channel.id, msg.id ] );
        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `MANAGE_MESSAGES`")
        }
    },
};

