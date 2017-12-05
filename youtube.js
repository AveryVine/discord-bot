const apiKeys = require('./apiKeys.js');
const request = require('request');
var search = require('youtube-search');
const Discord = require('discord.js');
const $ = module.exports;

var message = null;

$.search = function (messageObject, searchInput) {
    message = messageObject;
    console.log("Searching YouTube for: " + searchInput);
    var searchOptions = {
        maxResults: 1,
        key: apiKeys.google
    }
    search(searchInput, searchOptions, function (err, results) {
        if (err) {
            console.log("Something went wrong!\n" + err);
            sendMessage("Something went wrong!");
        }
        else {
            console.log(results);
            message.channel.sendMessage(results[0].link);
        }
    });
}

function sendMessage(reply) {
    console.log("(" + new Date() + ") Sending message: " + reply);
    message.channel.send(reply);
}