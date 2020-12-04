const mergeImg = require('merge-img');

module.exports = {
    name: 'merge',
    usage: '`rcc.merge`',
    description: 'merge!',
    executableBy: "Members",
    async execute(message, args, client) {
        mergeImg([`${__dirname}/body.png`, `${__dirname}/mouth.png`, `${__dirname}/eyes.png`])
            .then((img) => {
                img.write('image.png', (imagee) => message.channel.send(imagee));
                
            });
    },
};