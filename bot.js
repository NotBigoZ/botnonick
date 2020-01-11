const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () =>{
console.log('This bot is online!') //Tells you if the bot goes online using the log
client.user.setStatus('online')
client.user.setPresence({
        game: {
            name: 'Use nn!help',
            type: "Listening",
            url: "https://www.nonick.it/"
        }
    });



client.on('message', message => {
    if (message.content === 'nn!help') {
    	message.channel.send('> ping \n > bing');
  	}
});




client.on('message', message => {
        if (message.content === 'test') {
        message.guild.createChannel(ciao').then(channel => {
        channel.setTopic('Topix')
                })
        }
});

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
