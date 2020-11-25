module.exports = {
	name: 'fetch-user',
	description: 'fetch a user!',
	execute(message, args, client) {
    console.log(args[0])
    client.fetch(args[0]).then(user=>message.channel.send(user.tag))
  }
};
//653438377047228436(user.tag))
