const { numbers, text, binary } = require(`${__dirname}/../../utilities/math-stuff/code-libraries.js`);

module.exports = {
	name: 'encode',
  usage: '`rcc.credits`',
	description: 'encode!',
	execute(message, args, client) {
    sentencoded = [];
    sentence = args.join(" ");
    sentarray = sentence.split('');
    sentarray.forEach(letter => {
      numbers.forEach(index => {
        if(letter === text[index]) {
          sentencoded.push(binary[index]);
        }
      })
    })
    console.log(sentencoded);
    sentence = sentencoded.join(" ");
    message.channel.send(sentence);
	},
};