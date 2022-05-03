const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color:0x12c5e0,
            author: {
                icon_url: message.author.avatarURL ,
                name: `Commands of ${client.user.username}`
            },
            description: "There is all my useful commands ! For more information about me just type the command info",
            fields:[{
                name:":pushpin: Admins",
                value:"ban/clear/kick",
            },{
                name:":pencil: Moderators",
                value:"kick/clear"
            },{
                name:":video_game: Players",
                value:"help/infos/ping/regles"
            }],
            
            thumbnail: { url: client.user.avatarURL }

        }
    }) 
}
module.exports.help = {
    name: 'help'
};