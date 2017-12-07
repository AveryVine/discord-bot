const apiKeys = require('./apiKeys.js');
const request = require('request');
const Discord = require('discord.js');
const $ = module.exports;

var message = null;
var options = {};

$.search = function (messageObject, searchInput) {
    message = messageObject;
    console.log("Searching Twitch for: " + searchInput);
    options.url = 'https://api.twitch.tv/kraken/search/streams?query=' + encodeURIComponent(searchInput);
    options.headers = {
        "Client-ID": apiKeys.twitchId,
        "Accept": "application/vnd.twitchtv.v5+json"
    };
    console.log("Reaching out to " + options.url);
    request(options, searchCallback);
}

function searchCallback(error, response, body) {
    switch (response.statusCode) {
        case 200:
            var json = JSON.parse(body);
            console.log("Got stream: " + json.streams[0].channel.url);
            sendMessage(json.streams[0].channel.url);
            break;
        case 401:
            console.log("Unauthorized\nCode: " + response.statusCode + "\nBody: " + body);
            sendMessage("Something went wrong!");
            break;
        default:
            console.log("Something went wrong!\nCode: " + response.statusCode + "\nBody: " + body);
            sendMessage("Something went wrong!");
    }
}

function sendMessage(reply) {
    console.log("(" + new Date() + ") Sending message to channel " + message.channel + ": " + reply);
    message.channel.send(reply);
}