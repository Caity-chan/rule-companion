const fs = require('fs');


function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}
module.exports = {
	name: 'populate',
	description: 'populate!',
	execute(message, args, client) {
    if(message.author.id === '563980783828860944') {
      async function populate(msgs) {
        i = 0;
        while(i <= msgs) {
          await message.channel.send(i);
          await wait(1000);
          i += 1;
        }
      }
      populate(args.join(" "));
    }
	},
};
