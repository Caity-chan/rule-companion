const axios = require('axios')

/*
var http = require('http');

var options = {
  host: 'https://little.companion.repl.co',
  path: '/messages',
  port: '3000',
  method: 'POST'
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("data");
req.end();
*/
module.exports = {
	name: 'web-post',
	description: 'post on web!',
	execute(message, args, client) {
    /*
    axios
      .post('https://little.companion.repl.co/messages', {
        message: args.join(' ')
      })
      .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })
    */
    console.log("BOOM");
  }
}