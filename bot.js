const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () =>{
console.log('This bot is online!') //Tells you if the bot goes online using the log
client.user.setActivity('Calcio',{ //Put the text you want it to say as the activity here in the ' '
type: 'WATCHING' //Sets activity. Uses "WATCHING" "STREAMING" "PLAYING
}).catch(console.error); //Catches if an error happens

})




client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
