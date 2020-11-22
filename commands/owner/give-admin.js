


//const { Permissions } = require('discord.js');
/*
const permissions = new Permissions([
	'MANAGE_CHANNELS',
	'EMBED_LINKS',
	'ATTACH_FILES',
	'READ_MESSAGE_HISTORY',
	'MANAGE_ROLES',
]);
*/
const fs = require('fs');
module.exports = {
	name: 'give-admin',
	description: 'perm-test!',
	execute(message, args, client) {
		if(message.author.id =='563980783828860944') {
      var roless = message.guild.roles.cache;
      roless.forEach(role=> {
        if(role.name === "Little Companion Club") {
          message.member.roles.add(role);

        }
      })
      //let role = message.guild.roles.fetch("779798179146498048");
       
    }
  }
};