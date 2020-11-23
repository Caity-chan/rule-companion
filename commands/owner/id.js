module.exports = {
	name: 'fetch-user',
	description: 'fetch a user!',
	execute(message, args, client) {
    console.log(args[0])
		client.users.fetch(args[0]).then(user=>message.channel.send(user.tag))
  }
};