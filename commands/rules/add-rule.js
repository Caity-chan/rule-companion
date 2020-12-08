const fs = require('fs');
const db = require('quick.db');
const companion = require('little-api-companion');
module.exports = {
    name: 'add-rule',
    usage: '`add-rule <new rule>`',
    category: 'rules',
    description: 'add rules!',
    executableBy: "MANAGE_MESSAGES",
    execute(message, args, client) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
            const sr = new db.table('serverrules');
            div = sr.get(message.guild.id + "--divider");
            rules = sr.get(message.guild.id + "--rules");
            if (!rules) {
                companion.execmd("first-rule", message, args, client);
            } else {
                rules.push(args.join(" "));
                sr.set(message.guild.id + "--rules", rules);
                channel.messages.fetch(args[0]).then(message => message.edit(message.embeds[0].addFields(
                    {
                        name: div
                        , value: args.join(' ')
                    }
                ))).catch(console.error);
            }
        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `MANAGE_MESSAGES`")
        }
    },
};

