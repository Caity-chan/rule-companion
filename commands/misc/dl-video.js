const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above



//const fs = require('fs');
module.exports = {
	name: 'dl-vid',
	description: 'download video!',
	execute(message, args, client) {
    link = args[0];
        if(message.author.id =='563980783828860944') {
        (async () => {
          await ytdl(link)
      .pipe(fs.createWriteStream(`${__dirname}/../videos/tempfile.mp4`));
          await message.channel.send({
    files: [`${__dirname}/../videos/tempfile.mp4`]
          });
          fs.unlinkSync(`${__dirname}/../videos/tempfile.mp4`)
        })();
           
          //
        }
        console.log("done");
        console.log(link);
    //link = args.join("");
    
		 
   
	},
};

