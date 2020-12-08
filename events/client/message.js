const fs = require('fs');
const mainprefix = process.env.MAINPREFIX;
//const { setCommands } = require(`${__dirname}/../../utilities/commands.js`);
const logpath = `${__dirname}/../../misc/logs.txt`;
const db = require('quick.db');

const companion = require('little-api-companion')
//patha = `${__dirname}/../../misc/blacklist/blacklistedMembers.txt`;
//var testcheck = companion.cbl(patha, 0);
//console.log(testcheck);
module.exports = {
    name: 'message',
    description: 'commands!',
    async eventexec(client, message) {
        const commandlist = client.commandlist;
        user = message.author.id
        const prefixes = new db.table('prefixes');
        const userprefix = prefixes.get(`user.${user}`);
        if (message.author.bot) return;
        if (userprefix === undefined) {
            if (!message.content.toLowerCase().startsWith(mainprefix)) {
                return;
            } else {
                prefixes.set(`usercurrent.${user}`, mainprefix);
            }
        } else {
            if (!message.content.startsWith(userprefix)) {
                if (message.content.toLowerCase().startsWith(mainprefix)) {
                    prefixes.set(`usercurrent.${user}`, mainprefix);
                } else {
                    return;
                }
            } else {
                prefixes.set(`usercurrent.${user}`, userprefix)
            }
        }

        prefixa = prefixes.get(`usercurrent.${user}`);
        const prefix = prefixa.toLowerCase();
        const molded = companion.mold(message, prefix)
        const args = molded.args;
        const command = molded.command;

        patha = `${__dirname}/../../misc/blacklist/blacklistedMembers.txt`;
        pathb = `${__dirname}/../../misc/blacklist/blacklistedGuilds.txt`;

        if (companion.cbl(patha, message.author.id) === true) return;

        if (message.guild === null) {
            guild = "@me"
        } else {
            guild = message.guild.id
            if (companion.cbl(pathb, guild) === true) return;
        }
        companion.execmd(command, message, args, client);
        var targs = args.join(' ');
        fs.appendFile(logpath, `\n [Guild.${guild}.member.${message.author.id}] ${command} <${targs}>`, function(err) {
            if (err) throw err;
            console.log('Command executed successfully!');
        });
        if (guild !== "@me") {
            //message.delete();
        }



    }
};