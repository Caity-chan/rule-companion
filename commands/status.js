const fs = require('fs');
//const { client } = require(`${__dirname}/../index.js`);
module.exports = {
  name: 'status',
  description: 'set bot status!',
  execute(message, args, client) {
    client.user.setActivity(args.join(' '));
    fs.appendFile('./misc/logs.txt', "\n [Bot] Status changed!", function (err) {
      if (err) throw err;
      console.log('Updated!');
    })
  }
};