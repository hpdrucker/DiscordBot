const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
    name: 'pay',
    aliases: ['badjoke', 'shame', 'p'],
    description: 'adds 1 Fr.- to your debts',
    execute(client, message, args) {
        let argsString = args.join(' ');
        let exists;
        if (args.length == 0) {
            message.channel.send("You have to enter a Joke");
        } else {
        message.author.id in client.notes ? exists = true : exists = false;
        let username = message.author.username;
        if (exists === true) {
            let jokes = client.notes[message.author.id].text;
            jokes.push(argsString);
            let debt = client.notes[message.author.id].debt;
            client.notes[message.author.id] = {
                name: username,
                text: jokes,
                debt: debt+1
            }
        } else {
            let arr = [];
            arr.push(argsString);
            client.notes[message.author.id] = {
                name: username,
                text: arr,
                debt: 1
            }
        }
            fs.writeFile("./jsons/notes.json", JSON.stringify(client.notes, null, 4), err => {
                if (err) throw err;
            });
            message.channel.send("You have successfully added a bad joke")
            const embed = new Discord.MessageEmbed()
                .setTitle("Your Debts")
                .addField(client.notes[message.author.id].name, client.notes[message.author.id].debt);
            message.channel.send(embed);
        }

    }
}