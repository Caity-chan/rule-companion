const companion = require("little-api-companion");
module.exports = {
    name: 'help',
    usage: '`rcc.help <category>`',
    description: 'help!',
    executableBy: "Members",
    execute(message, args, client) {
        if (message.content.toLowerCase().includes('owner')) return;
        companion.helpCmd(message, args, client);
    },
};