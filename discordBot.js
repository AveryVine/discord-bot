const apiKeys = require('./apiKeys.js');
const league = require('./league.js');
const Discord = require('discord.js');
const client = new Discord.Client();
var discordToken = "";

client.on('ready', () => {
    console.log('Discord Bot powered on.');
});

client.on('message', message => {
    if (!message.author.bot) {
        if (message.content === 'ping') {
            message.channel.send('pong');
        }
        else if (message.content.startsWith('lookup ')) {
            league.lookup(message);
        }
    }
});

client.login(apiKeys.discord);