const { fibonacci } = require(`${__dirname}/../../utilities/math-stuff/fibonacci.js`);
//fibonacci(0, 1, 1); //starts out at values 0 and 1 at a delay of 1 second per turn

module.exports = {
	name: 'fibonacci',
	description: 'fibonacci!',
	execute(message, args, client) {
    if(message.member.hasPermission("ADMINISTRATOR")) {
      na = parseInt(args[0]);
      nb = parseInt(args[1]);
      seconds = parseInt(args[2]);
      //const { fibval } = require(`${__dirname}/../utilities/math-stuff/fibonacci.js`);
      fibonacci(na, nb, seconds, message.channel.id, client);
      
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
    
	},
};