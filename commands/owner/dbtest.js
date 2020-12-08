module.exports = {
    name: 'dbtest',
    usage: '`rcc.dbtest`',
    description: 'dbtest!',
    execute(message, args, client) {
        message.channel.send('Pong Pong.');
    },
};

