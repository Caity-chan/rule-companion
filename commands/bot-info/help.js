const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const mainEmbed = new Discord.MessageEmbed()
  .setColor('Put Hex Code here')
  .setTitle('Rule Composition Companion Command List')
  .addFields(
    { name: 'This is the main help page!'
    , value: "For help in a specific category, use `rcc.help <Category>`. There is a list of categories below, along with some commands that I don't have a category for yet!" }
    
    ,

    { name: 'Rules'
    , value: 'Commands to set up rules list.' }
    
    ,

    { name: 'Moderation'
    , value: "Commands to make moderation easier." }
    
    ,

    { name: 'Misc'
    , value: "Commands that I don't know where to put" }
    
    ,

    { name: 'Server'
    , value: "Server Commands" }
    
    
    ,

    { name: "Developer's Note"
    , value: 'Please do not include <> in the commands, that just tells you where to put the item(like the rule or announcement).' }

  );

const moderationEmbed = new Discord.MessageEmbed()
  .setColor('Put Hex Code here')
  .setTitle('Rule Composition Companion Command List')
  .addFields(
    { name: 'rcc.warn <@user> <reason>'
    , value: 'Warns a member! Reason argument optional.' }
    
    ,

    { name: 'rcc.read-warns <@user>'
    , value: "Read a member's warns!" }
    
    ,

    { name: 'rcc.remove-warn <@user> <warn ID>'
    , value: "Remove a member's warn! You can use `<reason you warned the person>` instead of `<warn ID>` if you want!" }
    
    ,

    { name: 'rcc.purge <number>'
    , value: "Delete a certain amount of messages in a channel!" }
    
    ,
    
    { name: "Developer's Note"
    , value: 'Please do not include <> in the commands, that just tells you where to put the item(like the rule or announcement).' }

  );

const rulesEmbed = new Discord.MessageEmbed()
  .setColor('Put Hex Code here')
  .setTitle('Rule Composition Companion Command List')
  .addFields(
    { name: 'rcc.divider-style <Text you wanna use to divide the rules>'
    , value: 'Put a divider that you want in between each rule, for example: \nrcc.divider-style >--------------------<' }
    
    ,

    { name: 'rcc.first-rule <Rule>'
    , value: 'Sets the first rule for the server.' }
    
    ,

    { name: 'rcc.add <Rule>'
    , value: "Adds a rule to the server's rule list." }
    
    ,

    { name: 'rcc.post'
    , value: 'Posts the rules in the channel you execute the command.' }
    
    ,

    { name: 'rcc.dm-rules'
    , value: "DMs the server rules to the person that executes the command(good for if you don't want a rules channel, but still want people to know the rules)" }
    
    ,

    { name: 'rcc.reset'
    , value: 'Resets the rules list for the server.' }
    
    ,

    { name: "Developer's Note"
    , value: 'Please do not include <> in the commands, that just tells you where to put the item(like the rule or announcement).' }

  );

const miscEmbed = new Discord.MessageEmbed()
  .setColor('Put Hex Code here')
  .setTitle('Rule Composition Companion Command List')
  .addFields(

    { name: 'rcc.help'
    , value: 'Lists the commands you can execute using the bot and the explanations of the commands.' }
    
    ,

    { name: 'rcc.credits'
    , value: 'Gives credit to the people who made the bot or contributed in helping make the bot.' }
    
    ,

    { name: 'rcc.suggest'
    , value: 'Provides you with my email so you can email me a suggestion for a feature for the bot or a way to make the bot better or easier to use.' }
    
    ,

    { name: 'rcc.support'
    , value: "Still need help or have any questions or concerns? Use this command to join the support server! You can also make suggestions there if you don't wanna use email!" }
    
    ,

    { name: 'rcc.invite'
    , value: 'Gives you the invite url so you can invite the bot to your server!' }
    
    ,

    { name: "Developer's Note"
    , value: 'Please do not include <> in the commands, that just tells you where to put the item(like the rule or announcement).' }

  );

const serverInfoEmbed = new Discord.MessageEmbed()
  .setColor('Put Hex Code here')
  .setTitle('Rule Composition Companion Command List')
  .addFields(

    { name: 'rcc.help'
    , value: 'Lists the commands you can execute using the bot and the explanations of the commands.' }
    
    ,

    { name: 'rcc.credits'
    , value: 'Gives credit to the people who made the bot or contributed in helping make the bot.' }
    
    ,

    { name: 'rcc.suggest'
    , value: 'Provides you with my email so you can email me a suggestion for a feature for the bot or a way to make the bot better or easier to use.' }
    
    ,

    { name: 'rcc.support'
    , value: "Still need help or have any questions or concerns? Use this command to join the support server! You can also make suggestions there if you don't wanna use email!" }
    
    ,

    { name: 'rcc.invite'
    , value: 'Gives you the invite url so you can invite the bot to your server!' }
    
  ,

    { name: 'rcc.announce <announcement>'
    , value: "Make anonymous announcements." }
    
    ,

    { name: 'rcc.opt-in'
    , value: 'Adds the channel that you execute this command in to a list. The list basically says which people want to be notified in their servers about bot updates or giveaways that I plan to do in the future.' }

    ,

    { name: "Developer's Note"
    , value: 'Please do not include <> in the commands, that just tells you where to put the item(like the rule or announcement).' }

    
  );
const fs = require('fs')
module.exports = {
	name: 'help',
  usage: '`rcc.help <category>`',
	description: 'help!',
  executableBy: "Members",
	execute(message, args, client) {
    if(message.content.toLowerCase().includes('owner')) return;
    if (!args[0]) {
      //return message.channel.send(mainEmbed);
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

          