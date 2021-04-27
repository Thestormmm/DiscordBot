const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color:0x12c5e0,
            author: {
                icon_url: message.author.avatarURL ,
                name: `Les commandes de ${client.user.username}`
            },
            description: "Voici toutes mes commandes utiles ! Pour plus d'information sur le bot vous pouvez uiliser la commande infos",
            fields:[{
                name:":pushpin: Administrateurs",
                value:"ban/clear/kick",
            },{
                name:":pencil: Moderateur",
                value:"kick/clear"
            },{
                name:":video_game: Joueurs",
                value:"help/infos/ping/regles"
            }],
            
            thumbnail: { url: client.user.avatarURL }

        }
    }) 
}
module.exports.help = {
    name: 'help'
};