const { numbers, text, binary } = require(`${__dirname}/../utilities/math-stuff/code-libraries.js`);

module.exports = {
	name: 'decode',
	description: 'decode!',
	execute(message, args, client) {
    sentdecoded = [];
    sentence = args.join(" ");
    sentarray = sentence.split(' ');
    sentarray.forEach(binaries => {
      numbers.forEach(index => {
        if(binaries === binary[index]) {
          sentdecoded.push(text[index]);
        }
      })
    })
    console.log(sentdecoded);
    sentence = sentdecoded.join("");
    message.channel.send(sentence);
	},
};