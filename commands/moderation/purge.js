
function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}
module.exports = {
	name: 'purge',
  usage: '`rcc.purge <message amount>`',
	description: 'purge chat!',
  executableBy: "Administrator",
	execute(message, args, client) {
    num = parseInt(args[0]);
    reason = args.slice(1).join(' ');
		if (message.member.hasPermission(`ADMINISTRATOR`)) {
      if (num <= 99) { 
        message.channel.bulkDelete(num+1);
        
      } else {
        async function deleteMsgs(count) {
          while(count > 0) {
            await message.channel.bulkDelete(Math.min(100, count));
            
            count -= 100;
            await wait(1000);
          }
          if (reason === '') {
            await message.channel.send('Purged **' + num + '** messages! `No reason given.`')
          } else {
            await message.channel.send(`Purged **${num}** messages for \`${reason}\`.`)
          }
        }
        deleteMsgs(num + 1);
        
      }
      
      console.log(reason);
      
        
    } else {
      return message.channel.send(`${message.author}` + " You have insufficient permissions! Required permissions: `ADMINISTRATOR`")
    }
	},
};

