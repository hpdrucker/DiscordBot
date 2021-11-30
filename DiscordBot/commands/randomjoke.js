const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
    name: 'randomjoke',
    aliases: ['rj'],
    description: 'outputs a random joke from a User',
    execute(client, message, args){
        let textEmbed = new Discord.MessageEmbed()
            .setColor('#12ffff')
            .setTitle('RandomJoke');
        let notes = client.notes;
        var myArray = [];
        for(var key in notes) {
            if (notes.hasOwnProperty(key)) {
                myArray.push(key);
            }
        }
        var randomUser = myArray[Math.floor(Math.random()*myArray.length)];
        var randomJoke = Math.floor(Math.random() * notes[randomUser].text.length);
        textEmbed.addField(notes[randomUser].name, notes[randomUser].text[randomJoke]);
        message.channel.send(textEmbed);
    }
}