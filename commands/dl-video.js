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
    args.forEach(link => {
      setTimeout(function() {
        if(message.author.id =='563980783828860944') {
        
          fs.readdir( `${__dirname}/../videos`, (error, files) => { 
            let totalFiles = files.length; // return the number of files
            length = totalFiles + 1; // print the total number of files
            ytdl(link)
      .pipe(fs.createWriteStream(`${__dirname}/../videos/${length}.mp4`));
          });
        } if(message.author.id =='396892476360884224') {
          fs.readdir( `${__dirname}/../videos`, (error, files) => { 
            let totalFiles = files.length; // return the number of files
            length = totalFiles + 1; // print the total number of files
            ytdl(link)
      .pipe(fs.createWriteStream(`${__dirname}/../videos/${length}.mp4`));
          });
        }
        console.log("done");
        console.log(link);
      }, link * 3000);
    })
    //link = args.join("");
    
		 
   
	},
};

