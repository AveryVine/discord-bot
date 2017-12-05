const apiKeys = require('./apiKeys.js');
const league = require('./league.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const botName = "alfred";
var discordToken = "";

client.on('ready', () => {
    console.log('Discord Bot powered on.');
});

client.on('message', message => {
    if (!message.author.bot) {
        if (message.content.toLowerCase().startsWith(botName + " ")) {
            var content = message.content.replace(botName + " ", "").trim();
            console.log("Content: " + content);
            if (content === 'ping') {
                message.channel.send('pong');
            }
            else if (content.startsWith('summoner ')) {
                league.summoner(message, content);
            }
        }
    }
});

client.login(apiKeys.discord);