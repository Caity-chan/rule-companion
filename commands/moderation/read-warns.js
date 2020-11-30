const Datastore = require('nedb')
const warns = new Datastore('./misc/warns.db');
const db = require('quick.db');
const fs = require('fs');
module.exports = {
    name: 'read-warns',
    usage: '`rcc.read-warns <@User or UserID>`',
    description: "read someone's warns!",
    executableBy: "Administrator",
    async execute(message, args, client) {
        warns.loadDatabase()
        const useree = args[0];
        const warntable = new db.table("currentwarns")
        var user = useree.match(/\d{16,23}/g)[0]
        const warningsliced = message.content.split(' ').slice(2);
        const warnse = []
        if (message.member.hasPermission(`ADMINISTRATOR`)) {
            var ees = message.guild.id;
            var warning = warningsliced.join(' ');
            let warnings = ''
            wearns = '';
            await warns.find({ name: user, guild: message.guild.id }, async function(err, docs) {
                message.channel.send(docs.warning);
                await docs.forEach(async function(d) {
                    var myJSON = JSON.stringify(d.warning);
                    console.log(user)
                    const users = user;
                    console.log(users)
                    const usera = users.toString();
                    console.log(usera)

                    console.log(user)
                    user = await client.users.fetch(user);
                    console.log(user.username)
                    wearns = wearns + '\n**' + user.tag + '**' + ' has a warn for ' + '`' + myJSON + '`' + `!` + ` Warn ID: **${d._id}**`
                    console.log("id: " + user.id)
                    await warntable.set(message.author.id, wearns);
                    console.log(wearns);

                })
                console.log(wearns);
                wearns = await warntable.get(message.author.id)
                
                if (wearns) { message.channel.send(wearns); warntable.delete(message.author.id); }
                else return message.channel.send("Specified user has no warns!");
                
            });

        } else {
            return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
        }
    },
};
