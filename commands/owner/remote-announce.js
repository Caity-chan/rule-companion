const fs = require('fs');

module.exports = {
	name: 'remote-announce',
	description: 'announce!',
	execute(message, args, client) {
	//message.channel.send(args.join(' '));
  function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    var last  = 0;
    while (index > -1) {
      var line = remaining.substring(last, index);
      last = index + 1;
      func(line);
      index = remaining.indexOf('\n', last);
    }

    remaining = remaining.substring(last);
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
  }
  let optedIn = [''];
  function func(data) {
    let newOptedIn = optedIn.push(data);
    const test = args.join(' ');
    client.channels.cache.get(data).send(test);
  }
    if (message.author.id == '563980783828860944') {
      input = fs.createReadStream('./misc/optedIn.txt');
      readLines(input, func);
    }
    
	},
};

