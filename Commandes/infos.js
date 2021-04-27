const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color:0x12c5e0,
            author: {
                icon_url: message.author.avatarURL ,
                name: `Les information sur ${client.user.username}`
            },
            description: `Voici quelques infos utiles sur ${client.user.username}`,
            fields :[{
                name : "Crée par Thestorm :",
                value :'Thestorm'
            },{
                name : "Version :",
                value : "1.0.0"

            },{
                name: "Commandes :" ,
                value: "!help pour voir toutes mes commandes",
            }
        ], 
            
            thumbnail: { url: client.user.avatarURL }

        }
    }) 
}
module.exports.help = {
    name: 'infos'
};