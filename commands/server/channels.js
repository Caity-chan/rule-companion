
const Discord = require('discord.js')
const db = require('quick.db');
module.exports = {
    name: 'channels',
    usage: '`rcc.channels`',
    description: 'Gives you a category>channel directory embed!',
    executableBy: "Administrator",
    execute(message, args, client) {
        if (message.member.hasPermission(`ADMINISTRATOR`)) {
            guild = message.guild
            categories = guild.channels.cache.filter(channel => channel.type === "category");
            dir = ""
            const dire = new Discord.MessageEmbed()
                .setColor('Put Hex Code here')
                .setTitle('Rule Composition Companion Command List').addFields(
                    {
                        name: 'This is the channel directory for the server!'
                        , value: "--------------"
                    }
                );
            categories.forEach(channel => {
                dir = ""
                channel.children.forEach(chann => {
                    if (chann.topic === undefined) {
                        chann.topic = "Voice Channel"
                    } else if (chann.topic === null) {
                        chann.topic = "No description"
                    }
                    dir = dir + "\n<#" + chann + ">" + " - " + chann.topic



                });
                dire.addFields(
                    {
                        name: "--------\n" + channel.name,
                        value: dir
                    }
                )
            });
            message.channel.send(dire)
        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
        }
    },
};