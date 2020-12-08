const fs = require('fs');
module.exports = {
    name: 'reset',
    usage: '`rcc.reset`',
    description: "Reset the server's rules!",
    executableBy: "MANAGE_MESSAGES",
    execute(message, args, client) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
            const sr = new db.table('serverrules');
            div = sr.get(message.guild.id + "--divider");
            return message.channel.send("Successfully reset divider and rules! (If you didn't have a copy of the divider here it is--)\n" + div);
            sr.delete(message.guild.id + "--divider");
            sr.delete(message.guild.id + "--rules");
            sr.delete(message.guild.id + "--ids");
        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `MANAGE_MESSAGES`")
        }
    },
};

