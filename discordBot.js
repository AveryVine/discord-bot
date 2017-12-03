const apiKeys = require('./apiKeys.js');
const Discord = require('discord.js');
const client = new Discord.Client();
var discordToken = "";

client.on('ready', () => {
  console.log('Discord Bot powered on.');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login(apiKeys.discordToken);