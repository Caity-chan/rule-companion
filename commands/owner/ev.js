module.exports = {
    name: 'ev',
    aliases: ["eval", "evev"],
    usage: '`rcc.ev`',
    description: 'ev!',
    execute(message, args, client) {
        if (message.author.id === "563980783828860944") {
            try {
                testa = args.join(" ").replace(/```js/, "");
                testa = testa.replace(/```/, "");
                eval(testa);
            } catch (err) {
                return message.channel.send("```" + err.toString() + "```");
            }
        }
    },
};

