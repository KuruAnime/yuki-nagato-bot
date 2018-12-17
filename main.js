const Discord   = require('discord.js');
const Client    = new Discord.Client();

// Bot Ready Message
Client.on('ready', () => {
    console.log('Bot is ready.');
});

// Main Code
Client.on('message', message => {

});

// Discord Login
Client.login(process.env.BOT_TOKEN);