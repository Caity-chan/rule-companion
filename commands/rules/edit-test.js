

module.exports = {
	name: 'edit',
  usage: '`rcc.credits`',
	description: 'edit!',
	execute(message, args, client) {
    channel = message.channel;
    //editer = channel.messages.cache.get(args[0]);
    //console.log(editer.flags)
    yes = args.slice(1).join(" ");
    channel.messages.fetch(args[0]).then(message => message.edit(message.content + ` ${yes}`)).catch(console.error);
    //console.log(editer)
    //message.channel.send(editer);
    //editer.edit("test");
    
    //message.channel.send('https://discord.gg/SzxychV');
	},
};