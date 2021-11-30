module.exports = {
    name: 'ping',
    description: 'this is a ping command!',
    execute(client, message, args){

        // if(message.member.roles.cache.has('842113399261495386')){  // also works with ...cache.some(r => r.name === "Mod")){}  Use this for precise name of Role search
             message.channel.send(`${message.author.toString()}`);
        // } else {
        //     message.channel.send('You cant send this message, because you dont have the Mod Role')
        // }
        
    }
}