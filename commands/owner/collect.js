const fs = require('fs');
function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}
module.exports = {
	name: 'collect',
	description: 'collect user IDs!',
	execute(message, args, client) {
		if(message.author.id =='563980783828860944') {
      async function collectuser() {
        users = client.users.cache;
        await users.forEach(user => {
          if(user.bot) {
            //fs.appendFile(`${__dirname}/../../misc/bots.txt`, `\n${user.tag}`, function (err) {
            //  if (err) throw err;
            //  console.log('Updated!');
            //});
          } else {
            fs.appendFile(`${__dirname}/../../misc/users.txt`, `\n${user.tag}`, function (err) {
              if (err) throw err;
              console.log('Updated!');
            });
          }
          
          wait(500);
        })
      };
      collectuser();
    }
	},
};

