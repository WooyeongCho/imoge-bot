global.Discord = require('discord.js');
const fs = require('fs');

const client = Discord.Client();

global.config = JSON.parse(fs.readFileSync('config.json')); // config 파일

client.on('ready', () => {

})

client.on('message', async msg => {

})

client.login(config.token.discord);