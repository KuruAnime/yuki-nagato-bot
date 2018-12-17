const Discord   = require('discord.js');
const Client    = new Discord.Client();

// Bot Ready Message
Client.on('ready', () => {
    console.log('Bot is ready.');
});

// Main Code
Client.on('message', message => {
    if (message.author.id === '496908630965092352') {
        message.delete();
        message.channel.send(message.content);
    }
});

// Discord Login
Client.login(process.env.BOT_TOKEN);