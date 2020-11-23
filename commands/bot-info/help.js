const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const fs = require('fs')
module.exports = {
	name: 'help',
  usage: '`rcc.help <category>`',
	description: 'help!',
  executableBy: "Members",
	execute(message, args, client) {
    if(message.content.toLowerCase().includes('owner')) return;
    if (!args[0]) {
      const cats = fs.readdirSync(`${__dirname}/../../commands`);
      const catsa = new Discord.MessageEmbed()
        .setColor('Put Hex Code here')
        .setTitle('Rule Composition Companion Command List').addFields(
          { name: 'This is the main help page!'
          , value: "For help in a specific category, use `rcc.help <Category>`. There is a list of categories below.\n---------\n" }
        );
      cats.forEach(cat=>{
        info = require(`${__dirname}/../../commands/${cat}/info.json`);
        catsa.addFields(
          {
            name: info.name,
            value: info.description
          }
        )
      })
      catsa.addFields(
          { name: "\n---------\nDeveloper's Note"
          , value: 'Please do not include <> in the commands, that just tells you where to put the item(like the rule or announcement).' }
        );
      message.channel.send(catsa);
      
    } else {
      
      const commands = fs.readdirSync(`${__dirname}/../${args.join(' ').toLowerCase()}`).filter(file => file.endsWith('.js'));
      
      const commande = new Discord.MessageEmbed()
        .setColor('Put Hex Code here')
        .setTitle('Rule Composition Companion Command List');   
      for (const file of commands) {
        const commander = require(`${__dirname}/../${args.join(' ').toLowerCase()}/${file}`);
        
          commande.addFields(
            {
              name: "Name: " + commander.name,
              value: "Usage: " + commander.usage + "\nDescription: " + commander.description + "\n**`Executable by: " + commander.executableBy + "`**"
            }
          )
        
      }
      message.channel.send(commande);
    }
	},
};

          