const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color:0x12c5e0,
            author: {
                icon_url: message.author.avatarURL ,
                name: `Informations about ${client.user.username}`
            },
            description: `There is some useful informations ${client.user.username}`,
            fields :[{
                name : "Created by Thestorm :",
                value :'Thestorm'
            },{
                name : "Version :",
                value : "1.0.0"

            },{
                name: "Commands :" ,
                value: "!help to see all my commands",
            }
        ], 
            
            thumbnail: { url: client.user.avatarURL }

        }
    }) 
}
module.exports.help = {
    name: 'infos'
};