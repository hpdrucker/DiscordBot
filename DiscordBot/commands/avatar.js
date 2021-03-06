module.exports = {
    name: 'avatar',
    description: 'gives back a link to the profile picture',
    execute(client, message, args){
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
        }
        
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
        });
        message.channel.send(avatarList);
    }
}