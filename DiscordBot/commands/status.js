const { User } = require('discord.js');
const util = require('minecraft-server-util');

module.exports = {
    name: 'status',
    description: 'posts all players',
    execute(client, message, args, Discord){
        util.status('176.57.137.84', {port: 25565}).then((response) => {
        //console.log(response);
        var players = response.samplePlayers;
        
        if(players == null){
            var playernames = '-';
        }else {
            var playernames = players.map((p) => {
                return p.name;
            })
        }
        console.log(playernames)
        
        const embed = new Discord.MessageEmbed()
        .setColor('#BFCDEB')
        .setTitle('Sturzis Server')
        .addFields(
            {name: 'Server IP', value: response.host},
            {name: 'Version', value: response.version},
            {name: 'Max Players', value: response.maxPlayers},
            {name: 'Online Players', value: playernames}
        )
        .setThumbnail(url='https://cdn.discordapp.com/attachments/836559081669132289/914570643025035354/minecraft-logo-icon-9.jpg')
        .setFooter('Status provided by WumuW');
        message.channel.send(embed);
        
    })
    .catch((error) => {
        console.error(error);
        throw error;
    });
    }
}