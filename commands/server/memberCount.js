module.exports = {
    name: 'member-count',
    usage: '`rcc.member-count`',
    description: 'amount of members in the server!',
    executableBy: "Members",
    execute(message, args, client) {
        message.channel.send("There are **" + message.guild.memberCount + "** members in this server!"
        );
    },
};