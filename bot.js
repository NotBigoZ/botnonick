const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () =>{
console.log('This bot is online!')
client.user.setStatus("online");
client.user.setPresence({
        game: {
            name: 'Use nn!help',
            type: "Listening",
            url: "http://www.nonick.it/"
        }
    });
})


client.on('message', message => {
    if (message.content === 'nn!help') {
    	message.channel.send('No one will help you.');
  	}
});


client.on('message', message => {
    if (message.content === 'nn!commands') {
    	message.channel.send('**__<< Common Commands >>__** \n \n **nn!invite** - *Gives Discord Invite Link.* \n **nn!helpme** - *Need Help.* ');
  	}
});










client.on('message', message => {
        if (message.content === 'test') {
        message.guild.createChannel('ciao',).then(channel => {
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
