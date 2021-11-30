module.exports = {
    name: 'mod',
    description: 'this is a mod command!',
    execute(client, message, args){

        // let role = message.guild.roles.cache.find(r => r.name === "Mod");  
        // -> variable welche Mod roles speichert
        // -> mit message.member.roles.add(role); wird diese role hinzugefügt
        // -> Achtung! schaut nur auf den Namen und nicht die ID der role.

        // message.member.roles.add('842113399261495386').catch(console.error);
        
    }
}