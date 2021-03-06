const Datastore = require('nedb')
const warns = new Datastore('./misc/warns.db');
const fs = require('fs');
module.exports = {
    name: 'warn',
    usage: '`rcc.warn <@User or UserID>`',
    description: 'warn someone!',
    executableBy: "Administrator",
    execute(message, args, client) {
        warns.loadDatabase()
        const useree = args[0];
        var user = useree.match(/\d{16,23}/g)[0]

        const warningsliced = message.content.split(' ').slice(2);
        const warnse = []
        if (message.member.hasPermission(`ADMINISTRATOR`)) {
            var ees = message.guild.id;
            const warning = warningsliced.join(' ');
            if (warning === '') {
                const warn = {
                    name: `${user}`,
                    warning: `no reason given`,
                    guild: `${message.guild.id}`
                }
                warning = `no reason given`
                warnse.push(warn);
            } else {

                const warn = {
                    name: `${user}`,
                    warning: `${warning}`,
                    guild: `${message.guild.id}`

                }

                warnse.push(warn);

                warns.insert(warn, function(err, docs) {
                    message.channel.send("<@" + user + ">" + " has been warned for `" + warning + "`!" + ` Warn ID: **${docs._id}**`);
                })
            }



        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
        }
    },
};

