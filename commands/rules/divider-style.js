const db = require('quick.db');



module.exports = {
    name: 'divider-style',
    usage: '`rcc.divider-style <divider>`',
    description: 'Make your own divider to separate your server rules!',
    executableBy: "MANAGE_MESSAGES",
    execute(message, args, client) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
            const sr = new db.table('serverrules');
            div = sr.set(message.guild.id + "--divider", args.join(" "));
        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `MANAGE_MESSAGES`")
        }
    },
};

