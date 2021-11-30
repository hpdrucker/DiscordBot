const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
    name: 'debts',
    aliases: ['d', 'ds'],
    description: 'debts counter if a bad joke has been said',
    execute(client, message, args){
        let textEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Debts');
        let notes = client.notes;
        for(var key in notes) {
            if (notes.hasOwnProperty(key)) {
                textEmbed.addField(notes[key].name, notes[key].debt);
            }

        }
        message.channel.send(textEmbed);
        const botInfo = new Discord.MessageEmbed()
            .setDescription('[Click here!](https://support.discord.com/hc/en-us/community/posts/360038398572-Hyperlink-Markdown)')

       // message.channel.send(botInfo);
    }

}