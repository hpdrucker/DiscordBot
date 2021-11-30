const { User } = require('discord.js');
module.exports = {
    name: 'help',
    description: 'shows all commands',
    execute(client, message, args, Discord){
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("FXcute Commands")
            .setURL('https://youtu.be/dQw4w9WgXcQ')
            .addFields(
                {name: '.pay  |  .shame  |  .bj  |  .p', value: '.pay + (joke)'},
                {name: '.debts  |  .d  |  .ds', value: 'Shows you debts of all players'},
                {name: '.randomjoke  |  .rj', value: 'Shows you a random bad joke'}
            );
        message.channel.send(embed);
    }
}